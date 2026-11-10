import { html, svg, nothing, TemplateResult } from 'lit';
import type { CardConfig, Module, Panel, Row } from '../types';
import { fmtMeasure, headGauges, headMeasures, isOn, loadLimit, modulePower, readMeasure } from '../utils/state';
import type { Counter } from '../utils/state';
import type { Kind } from '../utils/state';
import { DEFAULT_ICONS, Ctx } from './ctx';

/* Schéma unifilaire SVG : troncs de phases, boîtes d'identifiant, libellés, pastilles de puissance
   alignées à droite (avec jauge de saturation) et pastilles d'étage pour les zones.
   Unités = unités du viewBox (largeur de base 440, élargie via max_width). */
export const BASE_W = 440;
const RH = 22;          // hauteur d'une ligne
const BH = 14;          // hauteur d'une boîte
const BUB_W = 54;       // largeur réservée par pastille de mesure
const LEVEL = 34;       // décalage par niveau d'imbrication
const FS = 8;
const STATE_W = 24;      // largeur de la pastille d'état ON / OFF
const ON_COLOR = '#2f9e44';
const OFF_COLOR = '#e03131';

const PHASES = ['L1', 'L2', 'L3'];
const phaseColor = (p: string) => `var(--din-panel-phase-${p.toLowerCase()}-color, ${({ L1: '#8b4513', L2: '#1a202c', L3: '#5a6474' } as Record<string, string>)[p] ?? '#718096'})`;
const tw = (s: string, size = FS) => s.length * size * 0.56;
function fit(s: string, max: number, size = FS): string {
  if (tw(s, size) <= max) return s;
  const n = Math.floor(max / (size * 0.56)) - 1;
  return n < 2 ? '' : `${s.slice(0, n)}…`;
}

export function boardWidth(px: number): number {
  return px <= 700 ? BASE_W : Math.max(BASE_W, Math.round((px * BASE_W) / 700));
}

function floorColors(floor: string, cfg: CardConfig): { bg: string; fg: string } {
  const f = cfg.floors?.[floor];
  if (f?.bg) return { bg: f.bg, fg: f.fg ?? '#fff' };
  let h = 0;
  for (const c of floor) h = (h * 31 + c.charCodeAt(0)) % 360;
  return { bg: `hsl(${h} 45% 38%)`, fg: '#fff' };
}

export interface DiagramOpts {
  config: CardConfig; width: number; maxWidth: number;
  collapsed: Set<string>; toggle: (key: string) => void;
}

/* Clés de repli : p:<tableau> · r:<tableau>/<rangée>/<différentiel> · z:<tableau>/<rangée>/<circuit> */
export type Level = 'panels' | 'rows' | 'zones';
export function collapseKeys(panels: Panel[], level: Level): string[] {
  const out: string[] = [];
  for (const p of panels) {
    if (level === 'panels') { out.push(`p:${p.id}`); continue; }
    for (const r of p.rows) for (const m of r.modules) {
      if (level === 'rows' && m.type === 'differential' && m.children?.length) out.push(`r:${p.id}/${r.id}/${m.id}`);
      if (level === 'zones' && m.type !== 'differential' && m.zones.length) out.push(`z:${p.id}/${r.id}/${m.id}`);
    }
  }
  return out;
}

export function renderDiagram(panels: Panel[], ctx: Ctx, o: DiagramOpts): TemplateResult {
  const W = o.width;
  const cfg = o.config;
  // nombre maximal de pastilles côte à côte sur une ligne -> marge droite
  let maxB = 1;
  for (const p of panels) for (const r of p.rows) for (const m of r.modules) maxB = Math.max(maxB, modulePower(ctx.hass, m).counters.length);
  for (const r of [cfg.sensors?.total, ...Object.values(cfg.sensors?.phases ?? {})]) maxB = Math.max(maxB, headMeasures(ctx.hass, r).length);
  const PWR_X = W - Math.max(90, maxB * BUB_W + 6);
  const els: TemplateResult[] = [];

  /* ----- troncs ----- */
  const used = new Set<string>();
  for (const p of panels) for (const r of p.rows) { r.phases.forEach((x) => used.add(x)); r.modules.forEach((m) => m.phases.forEach((x) => used.add(x))); }
  Object.keys(cfg.sensors?.phases ?? {}).forEach((k) => used.add(k.toUpperCase()));
  const trunks = [...PHASES.filter((p) => used.has(p)), ...[...used].filter((p) => !PHASES.includes(p))];
  const TX0 = 14, TSP = 9;
  const tx = (p: string) => TX0 + trunks.indexOf(p) * TSP;
  const GX = TX0 + Math.max(1, trunks.length) * TSP + 8;
  const tStart = new Map<string, number>(), tEnd = new Map<string, number>();
  let y = 8;

  /* ----- primitives ----- */
  const boxW = (id: string) => Math.max(20, tw(id, 7) + 10);
  const box = (x: number, cy: number, id: string, fill?: string) => svg`
    <rect class="box" x=${x} y=${cy - BH / 2} width=${boxW(id)} height=${BH} rx="3" style=${fill ? `fill:${fill};stroke:${fill}` : ''}></rect>
    <text class="boxt" x=${x + boxW(id) / 2} y=${cy + 2.6} text-anchor="middle" style=${fill ? 'fill:#fff' : ''}>${id}</text>`;
  const line = (x1: number, y1: number, x2: number, y2: number, cls = 'wire', style = '') =>
    svg`<line class=${cls} x1=${x1} y1=${y1} x2=${x2} y2=${y2} style=${style}></line>`;

  interface Bub { value: number | null; partial: boolean; kind: Kind; limit?: number; tip?: string; approx?: boolean; }
  const bubOf = (c: Counter, limit?: number, tip = ''): Bub => ({ value: c.value, partial: c.partial, kind: c.kind, limit, tip });
  /** Pastilles de mesure côte à côte (une par type : W, kWh, A) à partir de PWR_X. */
  function bubbles(cy: number, items: Bub[]) {
    let x = PWR_X;
    return items.map((p) => {
      const txt = p.value === null ? 'n/d' : `${p.partial ? '≥ ' : p.approx ? '≈ ' : ''}${fmtMeasure(p.kind, p.value)}`;
      const w = Math.max(36, tw(txt, 7.5) + 10);
      const x0 = x;
      x += w + 3;
      const pct = p.value !== null && p.limit ? Math.max(0, p.value) / p.limit : null;
      const gc = pct === null ? '' : pct > 1 ? 'err' : pct >= 0.9 ? 'high' : pct >= 0.6 ? 'warn' : 'ok';
      return svg`<g class="bubble k-${p.kind} ${p.value === null ? 'bad' : ''}">
        <title>${p.tip ?? ''}</title>
        <rect class="bub" x=${x0} y=${cy - 7} width=${w} height="14" rx="7"></rect>
        <text class="val" x=${x0 + w / 2} y=${cy + (pct === null ? 2.6 : 0.8)} text-anchor="middle">${txt}</text>
        ${pct !== null ? svg`<rect class="gbg" x=${x0 + 7} y=${cy + 3.2} width=${w - 14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${gc}" x=${x0 + 7} y=${cy + 3.2} width=${(w - 14) * Math.min(1, pct)} height="1.8" rx=".9"></rect>` : nothing}
      </g>`;
    });
  }

  const chevron = (cx: number, cy: number, open: boolean) => svg`<path class="chev" d=${open ? `M${cx - 3},${cy - 1.5} L${cx},${cy + 2} L${cx + 3},${cy - 1.5}` : `M${cx - 1.5},${cy - 3} L${cx + 2},${cy} L${cx - 1.5},${cy + 3}`}></path>`;
  const chevHit = (cx: number, cy: number, key: string) =>
    svg`<rect class="hit chevhit" x=${cx - 6} y=${cy - 8} width="12" height="16" tabindex="0" role="button" aria-label=${key} @click=${(e: Event) => { e.stopPropagation(); o.toggle(key); }} @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); o.toggle(key); } }}></rect>`;

  /** Pointillés vers les pastilles, uniquement s'il y a quelque chose en face (to = abscisse d'arrivée). */
  const connector = (cy: number, labelEnd: number, has = true, to = PWR_X - 2) =>
    has && labelEnd + 6 < to ? line(labelEnd + 3, cy, to, cy, 'conn') : nothing;

  const firstEntity = (r?: { entity?: string; current_sensor?: string; voltage_sensor?: string }) => r?.entity ?? r?.current_sensor ?? r?.voltage_sensor;
  const press = (fn?: () => void) => (e: KeyboardEvent) => { if (fn && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fn(); } };
  /** Zone cliquable pleine largeur ; focusable au clavier (Entrée / Espace) quand elle a une action. */
  const hit = (rowY: number, click?: () => void, tip = '', active = !!click) =>
    active && click
      ? svg`<rect class="hit" x="0" y=${rowY} width=${W} height=${RH} tabindex="0" role="button" aria-label=${tip} @click=${click} @keydown=${press(click)}><title>${tip}</title></rect>`
      : svg`<rect class="hit" x="0" y=${rowY} width=${W} height=${RH}><title>${tip}</title></rect>`;

  /* ----- ligne Total + têtes de phases ----- */
  const headBubs = (ref?: { entity?: string; current_sensor?: string; voltage_sensor?: string; max_w?: number }): Bub[] =>
    headMeasures(ctx.hass, ref).map((h) => ({ value: h.value, kind: h.kind, partial: false, approx: h.approx, limit: h.kind === 'power' ? ref?.max_w : undefined, tip: h.approx ? 'U ≈ P / I' : h.entity }));
  const gauges = new Map(headGauges(ctx.hass, cfg.sensors, 'Total').map((g) => [g.key, g]));
  /** Jauge horizontale (sobre) entre le libellé et les pastilles ; à défaut, pointillés. */
  const headGauge = (cy: number, from: number, pct: number | null, has: boolean) => {
    const x2 = PWR_X - 8;
    if (pct === null || x2 - from < 24) return connector(cy, from - 3, has);
    const w = x2 - from, cls = pct > 1 ? 'err' : pct >= 0.9 ? 'high' : pct >= 0.6 ? 'warn' : '';
    return svg`<rect class="hg-bg" x=${from} y=${cy - 2.5} width=${w} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${cls}" x=${from} y=${cy - 2.5} width=${Math.max(2.5, w * Math.min(1, pct))} height="5" rx="2.5"></rect>`;
  };
  const total = cfg.sensors?.total;
  if (total?.entity || total?.current_sensor || total?.voltage_sensor) {
    const cy = y + RH / 2;
    const tb = headBubs(total);
    els.push(svg`<g style="--acc:var(--primary-color)">${box(GX, cy, 'Total')}
      <text x=${GX + boxW('Total') + 6} y=${cy + 2.8} class="dim">Total</text>
      ${headGauge(cy, GX + boxW('Total') + 10 + tw('Total'), null, tb.length > 0)}
      ${bubbles(cy, tb)}
      ${hit(y, () => ctx.moreInfo(firstEntity(total)!), firstEntity(total), !!firstEntity(total))}</g>`);
    y += RH;
  }
  for (const p of trunks) {
    const cy = y + RH / 2;
    tStart.set(p, cy); tEnd.set(p, cy);
    const ref = Object.entries(cfg.sensors?.phases ?? {}).find(([k]) => k.toUpperCase() === p)?.[1];
    const pb = headBubs(ref);
    const g = gauges.get(p);
    els.push(svg`<g>
      ${line(tx(p), cy, GX, cy, 'tap', `stroke:${phaseColor(p)}`)}
      <circle cx=${tx(p)} cy=${cy} r="2.6" style=${`fill:${phaseColor(p)}`}></circle>
      ${box(GX, cy, p, phaseColor(p))}
      ${pb.length ? svg`${headGauge(cy, GX + boxW(p) + 8, g?.pct ?? null, true)}${bubbles(cy, pb)}
        ${hit(y, () => ctx.moreInfo(firstEntity(ref)!), firstEntity(ref), !!firstEntity(ref))}` : nothing}</g>`);
    y += RH;
  }

  /* ----- éléments ----- */
  function labelRow(cy: number, x: number, m: Module, label: string | undefined, accentIcon: boolean, chev?: 'open' | 'closed', hasInfo = false, boxId = m.id) {
    const st = isOn(ctx.hass, m.state_entity);   // relais, contacteurs, télérupteur… : état connu ?
    const bx = boxW(boxId);
    const icon = accentIcon ? (m.icon ?? (m.type === 'breaker' ? DEFAULT_ICONS[m.usage] : DEFAULT_ICONS[m.type])) : undefined;
    const cw = chev ? 10 : 0;
    const lx = x + bx + (icon ? 18 : 6) + cw;
    const txt = fit(label ?? '', PWR_X - 8 - lx - (st === null ? 0 : STATE_W + 4));
    return svg`${box(x, cy, boxId, st === null ? undefined : st ? ON_COLOR : OFF_COLOR)}
      ${chev ? chevron(x + bx + 5, cy, chev === 'open') : nothing}
      ${icon ? svg`<foreignObject width="24" height="24" transform=${`translate(${x + bx + 4 + cw} ${cy - 5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${icon} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>` : nothing}
      ${txt ? svg`<text x=${lx} y=${cy + 2.8}>${txt}</text>` : nothing}
      ${connector(cy, txt ? lx + tw(txt) : lx - 2, hasInfo || st !== null, hasInfo ? PWR_X - 2 : PWR_X - STATE_W - 6)}
      ${st === null ? nothing : svg`<g class="spill ${st ? 'on' : 'off'}"><rect x=${PWR_X - STATE_W - 4} y=${cy - 6} width=${STATE_W} height="12" rx="6"></rect>
        <text class="spillt" x=${PWR_X - STATE_W / 2 - 4} y=${cy + 2.4} text-anchor="middle">${st ? 'ON' : 'OFF'}</text></g>`}`;
  }

  const tipFor = (m: Module, c: Counter) => (c.kind === 'current' && m.current_sensor ? m.current_sensor : m.sensor) ?? '';
  function power(m: Module) {
    const p = modulePower(ctx.hass, m);
    return bubbles(y + RH / 2, p.counters.map((c) => bubOf(c, loadLimit(m, c.kind), tipFor(m, c))));
  }

  function zoneRows(m: Module, x: number) {
    const busX = x + 8; // bus du circuit (sous sa boîte)
    let last = 0;
    const first = y + RH / 2;
    // icône de zone : celle de la zone, à défaut celle du disjoncteur (icône du module ou par défaut selon l'usage)
    const modIcon = m.icon ?? (m.type === 'breaker' ? DEFAULT_ICONS[m.usage] : DEFAULT_ICONS[m.type]);
    for (const z of m.zones) {
      const zIcon = z.icon ?? modIcon;
      const cy = y + RH / 2;
      const r = z.sensor ? readMeasure(ctx.hass, z.sensor) : undefined;
      const col = z.floor ? floorColors(z.floor, cfg) : undefined;
      const pw = z.floor ? tw(z.floor, 6.5) + 10 : 0;
      const ix = x + LEVEL + (z.floor ? pw + 4 : 0);   // icône de zone : après l'étage, avant la pièce
      const rx = ix + (zIcon ? 16 : 0);
      const room = fit(z.room ?? '', PWR_X - 8 - rx);
      els.push(svg`<g>
        ${line(busX, cy, x + LEVEL, cy)}
        ${col ? svg`<rect x=${x + LEVEL} y=${cy - 6} width=${pw} height="12" rx="6" style=${`fill:${col.bg}`}></rect>
          <text class="pillt" x=${x + LEVEL + pw / 2} y=${cy + 2.3} text-anchor="middle" style=${`fill:${col.fg}`}>${z.floor}</text>` : nothing}
        ${zIcon ? svg`<foreignObject width="24" height="24" transform=${`translate(${ix} ${cy - 5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${zIcon} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>` : nothing}
        ${room ? svg`<text x=${rx} y=${cy + 2.8}>${room}</text>` : nothing}
        ${connector(cy, rx + tw(room), !!r)}
        ${r ? bubbles(cy, [{ value: r.value, kind: r.kind, partial: false, tip: z.sensor }]) : nothing}
        ${hit(y, z.sensor ? () => ctx.moreInfo(z.sensor!) : undefined, [z.floor, z.room].filter(Boolean).join(' · '))}</g>`);
      last = cy;
      y += RH;
    }
    return { first, last };
  }

  function circuit(m: Module, x: number, accent: string, pk: string, rk: string, busX?: number, taps: string[] = []) {
    const cy = y + RH / 2;
    for (const p of taps) tEnd.set(p, Math.max(tEnd.get(p) ?? 0, cy));
    const zkey = `z:${pk}/${rk}/${m.id}`;
    const hasZ = m.zones.length > 0;
    const zOpen = hasZ && !o.collapsed.has(zkey);
    const bxc = x + boxW(m.id) + 5;
    els.push(svg`<g style=${`--acc:${m.accent ?? accent}`}>
      ${busX !== undefined ? line(busX, cy, x, cy) : nothing}
      ${taps.length ? line(tx(taps[0]), cy, x, cy, 'tap', `stroke:${phaseColor(taps[0])}`) : nothing}
      ${taps.map((p) => svg`<circle cx=${tx(p)} cy=${cy} r="2.6" style=${`fill:${phaseColor(p)}`}></circle>`)}
      ${labelRow(cy, x, m, moduleLabel(m), true, hasZ ? (zOpen ? 'open' : 'closed') : undefined, modulePower(ctx.hass, m).configured)}
      ${power(m)}
      ${hit(y, () => ctx.select(m), tipOf(m))}
      ${hasZ ? chevHit(bxc, cy, zkey) : nothing}</g>`);
    y += RH;
    if (zOpen) {
      const start = els.length;
      const z = zoneRows(m, x);
      // bus vertical sous la boîte du circuit jusqu'à la dernière zone
      els.splice(start, 0, svg`<g>${line(x + 8, cy + BH / 2, x + 8, z.last)}</g>`);
    }
    return cy;
  }

  const moduleLabel = (m: Module) => m.label;
  const tipOf = (m: Module) => [m.label, m.id, m.amp !== undefined ? `${m.amp} A` : '', m.mA !== undefined ? `${m.mA} mA` : ''].filter(Boolean).join(' · ');

  function group(d: Module, row: Row, label: string | undefined, pk: string, boxId = d.id) {
    const cy = y + RH / 2;
    const rkey = `r:${pk}/${row.id}/${d.id}`;
    const kids = d.children ?? [];
    const rOpen = kids.length > 0 && !o.collapsed.has(rkey);
    const bxg = GX + boxW(boxId) + 5;
    const accent = d.accent ?? row.accent ?? '#3182ce';
    const taps = (d.phases.length ? d.phases : row.phases).filter((p) => trunks.includes(p));
    for (const p of taps) tEnd.set(p, Math.max(tEnd.get(p) ?? 0, cy));
    els.push(svg`<g style=${`--acc:${accent}`}>
      ${taps.length ? line(tx(taps[0]), cy, GX, cy, 'tap', `stroke:${phaseColor(taps[0])}`) : nothing}
      ${taps.map((p) => svg`<circle cx=${tx(p)} cy=${cy} r="2.6" style=${`fill:${phaseColor(p)}`}></circle>`)}
      ${labelRow(cy, GX, d, label, false, kids.length ? (rOpen ? 'open' : 'closed') : undefined, modulePower(ctx.hass, d).configured, boxId)}
      ${power(d)}
      ${hit(y, () => ctx.select(d), tipOf(d))}
      ${kids.length ? chevHit(bxg, cy, rkey) : nothing}</g>`);
    y += RH;
    if (!rOpen) return;
    const bus = GX + 8;
    const busStart = els.length;
    let last = cy;
    for (const c of kids) last = circuit(c, GX + LEVEL, accent, pk, row.id, bus);
    if (kids.length) els.splice(busStart, 0, svg`<g style=${`--acc:${accent}`}>${line(bus, cy + BH / 2, bus, last)}</g>`);
  }

  /* ----- parcours des tableaux ----- */
  for (const panel of panels) {
    const pkey = `p:${panel.id}`;
    const pOpen = !o.collapsed.has(pkey);
    if (panel.label) {
      // Titre du tableau aligné sur les rangées (même abscisse GX que les différentiels)
      const cy = y + RH / 2, w = Math.max(60, tw(panel.label, 8.5) + 28);
      els.push(svg`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${GX} y=${cy - BH / 2 - 1} width=${w} height=${BH + 2} rx="3"></rect>
        ${chevron(GX + 8, cy, pOpen)}
        <text class="ptitle" x=${GX + 16} y=${cy + 3}>${panel.label}</text>
        <rect class="hit" x="0" y=${y} width=${W} height=${RH} tabindex="0" role="button" aria-label=${panel.label} @click=${() => o.toggle(pkey)} @keydown=${press(() => o.toggle(pkey))}><title>${panel.label}</title></rect></g>`);
      y += RH;
    }
    if (!pOpen && panel.label) continue;
    for (const row of panel.rows) {
      const diffs = row.modules.filter((m) => m.type === 'differential');
      const firstDiff = diffs.length ? row.modules.indexOf(diffs[0]) : row.modules.length;
      for (const m of row.modules.slice(0, firstDiff)) {
        if (m.type === 'free' && !m.label) continue;
        // circuit hors différentiel : relié directement aux troncs de ses phases
        circuit(m, GX, row.accent ?? '#3182ce', panel.id, row.id, undefined, (m.phases.length ? m.phases : row.phases).filter((p) => trunks.includes(p)));
      }
      // chaque différentiel : [id du différentiel] libellé de la rangée - libellé du différentiel (parties vides omises)
      for (const d of diffs) group(d, row, [row.label, d.label].filter(Boolean).join(' - ') || undefined, panel.id);
    }
  }

  /* ----- troncs verticaux (dessinés d'abord, sous le reste) ----- */
  const trunkEls = trunks.map((p) => line(tx(p), tStart.get(p)!, tx(p), tEnd.get(p)!, 'trunk', `stroke:${phaseColor(p)}`));
  const H = y + 8;
  return html`<div class="dia" style=${`max-width:${o.maxWidth}px`}>
    <svg viewBox=${`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${trunkEls}${els}</svg></div>`;
}
