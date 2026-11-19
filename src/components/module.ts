import { html, nothing, TemplateResult } from 'lit';
import type { Module } from '../types';
import { fmtMeasure, isOn, loadLimit, modulePower } from '../utils/state';
import { t } from '../utils/i18n';
import { DEFAULT_ICONS, Ctx } from './ctx';
import { FACES, surgeCols } from './modules/faces';

export function moduleTitle(m: Module, ctx: Ctx): string {
  return m.label ?? (m.type === 'free' ? t(ctx.lang, 'free') : m.id);
}

function spdTerminals(cols: string[]) {
  return html`<div class="term top sp">${cols.map((c) => html`<span class="tc"><b>${c}</b><i></i></span>`)}</div>`;
}

/** Prise : une seule borne en bas, repérée par le symbole de terre. */
function earthTerminal() {
  return html`<div class="term bot sp pe"><span class="tc"><i></i><svg class="earth" viewBox="0 0 12 10" aria-label="PE"><path d="M6 0v4M1 4h10M2.7 6.4h6.6M4.4 8.8h3.2" stroke="#333" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg></span></div>`;
}

function terminals(n: number, pos: 'top' | 'bot', neutral: boolean) {
  return html`<div class="term ${pos} ${neutral ? 'n' : ''}">${Array.from({ length: n }, () => html`<i></i>`)}</div>`;
}

const ZONE_FALLBACK = 'mdi:map-marker-outline';

/** Infobulle riche (icônes devant les textes) : module, puis la liste étage / pièce avec l'icône de chaque zone
 *  (icône de la zone, à défaut celle du disjoncteur). Positionnée en `fixed` pour ne pas être rognée par le défilement de la rangée. */
function tip(m: Module, title: string, icon: string | undefined): TemplateResult {
  const head = [m.amp !== undefined ? `${m.amp} A` : '', m.id !== title ? m.id : ''].filter(Boolean).join(' · ');
  const zones = m.zones.map((z) => ({ icon: z.icon ?? icon ?? ZONE_FALLBACK, text: [z.floor, z.room].filter(Boolean).join(' · ') })).filter((z) => z.text);
  return html`<div class="tip" role="tooltip">
    <div class="tip-h">${icon ? html`<ha-icon icon=${icon}></ha-icon>` : nothing}<b>${title}</b>${head ? html`<span class="tip-d">${head}</span>` : nothing}</div>
    ${zones.map((z) => html`<div class="tip-z"><ha-icon icon=${z.icon}></ha-icon><span>${z.text}</span></div>`)}
  </div>`;
}

function placeTip(e: Event) {
  const mod = e.currentTarget as HTMLElement;
  const el = mod.querySelector('.tip') as HTMLElement | null;
  if (!el) return;
  const r = mod.getBoundingClientRect();
  el.style.left = `${Math.max(4, Math.min(r.left, window.innerWidth - 270))}px`;
  if (r.top > 140) { el.style.bottom = `${window.innerHeight - r.top + 6}px`; el.style.top = 'auto'; }
  else { el.style.top = `${r.bottom + 6}px`; el.style.bottom = 'auto'; }
}

const STATEFUL = new Set(['relay', 'impulse', 'contactor', 'contactor_daynight', 'switch_disconnector']);

export function renderModule(m: Module, ctx: Ctx, flag = '', phases: string[] = []): TemplateResult {
  const p = modulePower(ctx.hass, m);
  const limit = loadLimit(m, p.kind);
  const pct = p.value !== null && limit ? Math.max(0, p.value) / limit : null;
  const led = pct === null ? '' : pct > 1 ? 'err' : pct >= 0.9 ? 'high' : pct >= 0.6 ? 'warn' : 'ok';
  const face = FACES[m.type] ?? FACES.custom;
  const cells = Math.max(1, m.poles); // une vis par pôle (1 pôle : une seule borne, sans N)
  const neutral = m.poles === 2 || m.poles >= 4; // repère N sur 2 et 4 pôles ; ni sur 1 pôle (une borne) ni sur 3 pôles
  const title = moduleTitle(m, ctx);
  const showPlate = m.type !== 'free' || !!m.label;
  const icon = m.icon ?? (m.type === 'breaker' ? DEFAULT_ICONS[m.usage] : DEFAULT_ICONS[m.type]);
  // Mesure du capteur au-dessus de l'identifiant ; un différentiel sans valeur n'affiche rien (pas de cadre vide).
  const diffMod = m.type === 'differential';
  const cs = p.counters.filter((c) => !(diffMod && c.value === null));
  const readout = p.configured && m.type !== 'meter' && cs.length
    ? html`<div class="readouts">${cs.map((c) => html`<div class="readout k-${c.kind} ${c.value === null ? 'bad' : ''} ${c.kind === 'power' && !ctx.showLed && (led === 'warn' || led === 'high' || led === 'err') ? `ld-${led}` : ''}" title=${t(ctx.lang, c.source === 'children' ? 'sum_children' : c.source === 'zones' ? 'sum_zones' : 'own_sensor')}>
        ${c.value === null ? 'n/d' : fmtMeasure(c.kind, c.value, true)}</div>`)}</div>`
    : nothing;
  // Appareils à état : liseré vert (enclenché) / rouge (déclenché) autour du module.
  const st = STATEFUL.has(m.type) ? isOn(ctx.hass, m.state_entity) : null;
  const idBand = m.type !== 'differential' && m.type !== 'free'; // identifiant dans la bande bleutée au-dessus de la manette
  const stCls = st === null ? '' : st ? 'st-on' : 'st-off';
  const style = `--w:${m.width};${m.accent ? `--acc:${m.accent};--cap:${m.accent};` : ''}`;
  const open = (e: Event) => {
    if (e instanceof KeyboardEvent && e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    ctx.select(m);
  };
  return html`<div class="mod t-${m.type} u-${m.usage} p-${m.poles} ${stCls} ${flag ? `s-${flag}` : ''}" style=${style} role="button" tabindex="0"
      aria-label=${`${title} ${m.id}`} @click=${open} @keydown=${open} @mouseenter=${placeTip} @focus=${placeTip}>
    ${phases.length ? html`<div class="phtag" title=${phases.join(' / ')}>${phases.map((ph) => html`<i class="ph-${ph.toLowerCase()}">${ph}</i>`)}</div>` : nothing}
    ${tip(m, title, icon)}
    <div class="face">
      ${m.type === 'surge' ? spdTerminals(surgeCols(m)) : m.type === 'socket' ? spdTerminals(['N', 'L']) : m.type !== 'free' ? terminals(cells, 'top', neutral) : nothing}
      ${led && ctx.showLed ? html`<i class="led ${led}"></i>` : nothing}
      <div class="body ${idBand ? 'ib' : ''}">${idBand ? html`<div class="pid">${m.id}</div>` : nothing}${face({ mod: m, ctx, power: p })}${readout}${m.type === 'differential' || idBand ? nothing : html`<div class="pid">${m.id}</div>`}</div>
      ${m.type === 'surge' ? terminals(1, 'bot', false) : m.type === 'socket' ? earthTerminal() : m.type !== 'free' ? terminals(cells, 'bot', neutral) : nothing}
    </div>
    ${showPlate
      ? html`<div class="plate">
          ${icon ? html`<span class="pi"><ha-icon icon=${icon}></ha-icon></span>` : nothing}
          <div class="txt" lang=${ctx.lang}>${title}</div>
          ${m.section ? html`<div class="sec">${m.section} mm²</div>` : nothing}</div>`
      : nothing}
  </div>`;
}
