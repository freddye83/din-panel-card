import { html, nothing, TemplateResult } from 'lit';
import type { Module } from '../types';
import { fmtMeasure, fmtPower, isOn, loadLimit, modulePower, moduleCurrent, readEntity, readMeasure } from '../utils/state';
import { t } from '../utils/i18n';
import { Ctx, DEFAULT_ICONS } from './ctx';
import { moduleTitle } from './module';

const kv = (k: string, v: unknown) => (v === undefined || v === '' ? nothing : html`<div class="kv"><span>${k}</span><b>${v}</b></div>`);

export function renderDetails(m: Module, ctx: Ctx, close: () => void): TemplateResult {
  const L = ctx.lang;
  const p = modulePower(ctx.hass, m);
  const limit = loadLimit(m, p.kind);
  const pct = p.value !== null && limit ? Math.min(100, (Math.max(0, p.value) / limit) * 100) : null;
  const cur = moduleCurrent(ctx.hass, m, p);
  const volt = readEntity(ctx.hass, m.voltage_sensor);
  const st = isOn(ctx.hass, m.state_entity);
  const icon = m.icon ?? (m.type === 'breaker' ? DEFAULT_ICONS[m.usage] : DEFAULT_ICONS[m.type]);
  const link = (e?: string) => (e ? () => ctx.moreInfo(e) : undefined);
  return html`<div class="dlg">
    <header><ha-icon icon=${icon ?? 'mdi:electric-switch'}></ha-icon>
      <div><h3>${moduleTitle(m, ctx)}</h3><div class="dim">${t(L, `t_${m.type}`)} · ${m.id}</div></div>
      <button class="x" @click=${close} aria-label=${t(L, 'close')}>✕</button></header>
    <div class="kvs">
      ${kv(t(L, 'rating'), m.amp !== undefined ? `${m.curve ?? ''}${m.amp} A` : undefined)}
      ${kv(t(L, 'poles'), m.poles)}
      ${kv(t(L, 'sensitivity'), m.mA !== undefined ? `${m.mA} mA` : undefined)}
      ${kv(t(L, 'cls'), m.cls)}
      ${kv(t(L, 'output'), m.output)}
      ${m.type !== 'differential' ? nothing : kv(t(L, 'max'), m.max_w ? fmtPower(m.max_w) : undefined)}
      ${kv(t(L, 'phases'), m.phases.length ? m.phases.join(' · ') : undefined)}
      ${m.type === 'breaker' && m.usage !== 'other' ? kv(t(L, 'usage'), t(L, `u_${m.usage}`)) : nothing}
      ${st === null ? nothing : kv(t(L, 'state'), st ? 'ON' : 'OFF')}
      ${kv('', m.note)}
    </div>
    ${p.configured || cur !== null || volt.value !== null
      ? html`<div class="values">
          ${p.counters.map((c) => html`<div class="big ${c.value === null ? 'bad' : ''}" @click=${link(c.kind === 'current' && m.current_sensor && m.sensor !== m.current_sensor ? m.current_sensor : m.sensor)}>
                ${c.value === null ? t(L, 'unavailable') : `${c.partial ? '≥ ' : ''}${fmtMeasure(c.kind, c.value)}`}
                <small>${t(L, c.source === 'zones' ? 'sum_zones' : c.source === 'children' ? 'sum_children' : 'own_sensor')}</small></div>`)}
          ${cur !== null && !p.counters.some((c) => c.kind === 'current') ? kv(t(L, 'current'), `${cur.toFixed(1)} A`) : nothing}
          ${volt.value !== null ? kv(t(L, 'voltage'), `${volt.value.toFixed(0)} V`) : nothing}
          ${pct !== null ? html`<div class="bar"><i style=${`width:${pct}%`} class=${pct >= 90 ? 'high' : pct >= 60 ? 'warn' : 'ok'}></i></div>
            <div class="dim">${t(L, 'load')} ${pct.toFixed(0)} % / ${fmtMeasure(p.kind, limit as number)}</div>` : nothing}
        </div>`
      : nothing}
    ${m.zones.length
      ? html`<h4>${t(L, 'zones')}</h4><ul class="zones">
          ${m.zones.map((z) => {
            const r = readMeasure(ctx.hass, z.sensor);
            return html`<li class=${z.sensor ? 'click' : ''} @click=${link(z.sensor)}>
              <ha-icon icon=${z.icon ?? 'mdi:map-marker-outline'}></ha-icon>
              <span>${[z.floor, z.room].filter(Boolean).join(' · ')}</span>
              ${z.sensor ? html`<b class=${r.value === null ? 'bad' : ''}>${r.value === null ? 'n/d' : fmtMeasure(r.kind, r.value)}</b>` : nothing}
            </li>`;
          })}</ul>`
      : nothing}
    ${m.children?.length
      ? html`<h4>${t(L, 'protects')}</h4><ul class="zones">
          ${m.children.map((c) => {
            const cp = modulePower(ctx.hass, c);
            return html`<li class="click" @click=${() => ctx.select(c)}>
              <span class="id">${c.id}</span><span>${moduleTitle(c, ctx)}</span>
              ${c.amp !== undefined ? html`<small>${c.amp} A</small>` : nothing}
              ${cp.counters.map((c) => html`<b class=${c.value === null ? 'bad' : ''}>${c.value === null ? 'n/d' : fmtMeasure(c.kind, c.value)}</b>`)}
            </li>`;
          })}</ul>`
      : nothing}
  </div>`;
}
