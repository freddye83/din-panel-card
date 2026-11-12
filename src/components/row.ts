import { html, nothing, TemplateResult } from 'lit';
import type { Row } from '../types';
import { fmtMeasure, modulePower } from '../utils/state';
import type { Ctx } from './ctx';
import { renderModule } from './module';
import { chunkByWidth } from '../utils/layout';

export function renderRow(row: Row, ctx: Ctx, capacity?: number): TemplateResult {
  const diff = row.modules.find((m) => m.type === 'differential');
  const p = diff ? modulePower(ctx.hass, diff) : undefined;
  return html`<section class="row" style=${row.accent ? `--acc:${row.accent}` : ''}>
    ${row.label || row.phases.length || p?.configured
      ? html`<header class="row-head">
          ${row.label ? html`<b>${row.label}</b>` : nothing}
          ${row.phases.map((ph) => html`<span class="chip ph-${ph.toLowerCase()}">${ph}</span>`)}
          ${p?.configured && p.counters.some((c) => c.value !== null) ? html`<span class="grow"></span>${p.counters.filter((c) => c.value !== null).map((c) => html`<span class="dim sum">${c.partial ? '≥ ' : ''}${fmtMeasure(c.kind, c.value as number)}</span>`)}` : nothing}
        </header>`
      : nothing}
    <div class="scroller"><div class="lines">
      ${chunkByWidth(row.modules, capacity).map((line) => html`<div class="rail-wrap ${capacity ? 'fixed' : ''}" style=${capacity ? `--n:${capacity}` : ''}><div class="rail"></div>
        ${line.map((m) => renderModule(m, ctx))}<span class="fill"></span>
      </div>`)}
    </div></div>
  </section>`;
}
