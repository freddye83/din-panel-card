import { html, nothing, TemplateResult } from 'lit';
import type { Panel } from '../types';
import type { Ctx } from './ctx';
import { renderRow } from './row';

export function renderPanel(panel: Panel, ctx: Ctx): TemplateResult {
  return html`<div class="panel ${panel.capacity ? 'fixed' : ''}">
    ${panel.label ? html`<div class="panel-title">${panel.label}</div>` : nothing}
    ${panel.rows.map((r) => renderRow(r, ctx, panel.capacity, panel))}
  </div>`;
}
