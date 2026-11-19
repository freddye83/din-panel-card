import { html, nothing, TemplateResult } from 'lit';
import type { Module } from '../../types';
import type { Power } from '../../utils/state';
import { fmtMeasure, isOn } from '../../utils/state';
import type { Ctx } from '../ctx';

/* Chaque face dessine le corps de l'appareil. L'identifiant (et la mesure du capteur, au-dessus)
   sont ajoutés par module.ts en bas du corps. */
export interface FaceArgs { mod: Module; ctx: Ctx; power: Power; }
export type Face = (a: FaceArgs) => TemplateResult;

const ampText = (m: Module) =>
  m.amp !== undefined ? html`<div class="print amp">${m.curve ?? ''}${m.amp}${m.curve ? '' : 'A'}</div>` : nothing;

/** Leviers individuels reliés par une barre de manœuvre pour les appareils multipolaires. */
function levers(m: Module, on: boolean) {
  const n = Math.max(1, Math.min(m.poles, m.width));
  return html`<div class="levers ${on ? 'on' : 'off'}">
    ${Array.from({ length: n }, () => html`<div class="cell"><div class="slot"><div class="lever ${on ? 'on' : 'off'}"></div></div></div>`)}
    ${n > 1 ? html`<i class="bar"></i>` : nothing}
  </div>`;
}

const breaker: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${levers(m, st !== false)}${ampText(m)}`;
};

const differential: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  const on = st !== false;
  return html`
    <div class="levers single ${on ? 'on' : 'off'}"><div class="slot wide"><div class="lever ${on ? 'on' : 'off'}"></div></div></div>
    <div class="dtype"><span>Type ${m.cls ?? 'AC'}</span>${m.mA !== undefined ? html`<span>${m.mA}mA</span>` : nothing}</div>
    ${m.amp !== undefined ? html`<div class="print amp">${m.amp}A</div>` : nothing}
    <div class="dtools"><span class="test">T</span><span class="win ${on ? 'ok' : 'trip'}"></span></div>`;
};

/** Zone centrale commune (même emplacement que la manette) : bloc noir contenant le repère propre à l'appareil. */
const zone = (cls: string, inner: TemplateResult | typeof nothing) => html`<div class="zone z-${cls}"><div class="blk ${cls}">${inner}</div></div>`;
/** Calibre encadré : `text` s'il est donné, sinon le calibre du module. */
const cal = (m: Module, text?: string) => {
  const v = text ?? (m.amp !== undefined ? `${m.curve ?? ''}${m.amp}${m.curve ? '' : 'A'}` : '');
  return v ? html`<div class="print amp ${text ? 'txt' : ''}">${v}</div>` : nothing;
};
const lens = (st: boolean | null) => html`<i class="zlens ${st === true ? 'on' : st === false ? 'off' : ''}"></i>`;

const daynight: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  const pos = st === true ? 'on' : st === false ? 'off' : 'auto';
  return html`${zone('dn', html`<div class="zsw"><span class=${pos === 'on' ? 'act' : ''}>I</span><span class=${pos === 'auto' ? 'act' : ''}>A</span><span class=${pos === 'off' ? 'act' : ''}>O</span></div>`)}${cal(m, m.amp !== undefined ? undefined : 'J/N')}`;
};

const contactor: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('ct', html`<span class="coil2"><b>A1</b><b>A2</b></span><i class="zmi ${st === true ? 'on' : ''}"></i>`)}${cal(m, m.amp !== undefined ? undefined : 'KM')}`;
};

/** Relais modulaire : bobine A1/A2 et voyant ; état lu depuis state_entity (capteur, switch…). */
const relay: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('rl', html`<span class="coil2"><b>A1</b><b>A2</b></span>${lens(st)}`)}${cal(m, m.amp !== undefined ? undefined : 'REL')}`;
};

/** Télérupteur : bouton-poussoir et voyant d'état. */
const impulse: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('tl', html`<i class="zbtn"></i>${lens(st)}`)}${cal(m, m.amp !== undefined ? undefined : 'TL')}`;
};

/** Alimentation (AC/DC modulaire) : potentiomètre, voyant DC OK, sortie imprimée dans le cadre. */
const psu: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('ps', html`<i class="zpot"><b></b></i><span class="dc">${lens(st === false ? false : true)}DC OK</span>`)}${cal(m, m.output ?? (m.amp !== undefined ? undefined : 'AC/DC'))}`;
};

/** Colonnes d'un parafoudre : 1-2 pôles = N + phase ; 3 pôles = L1 L2 L3 ; 4 pôles = N L1 L2 L3 (une vis et un carré par colonne). */
export function surgeCols(m: Module): string[] {
  const ph = (n: number) => Array.from({ length: n }, (_, i) => m.phases[i] ?? `L${i + 1}`);
  return m.poles >= 4 ? ['N', ...ph(3)] : m.poles === 3 ? ph(3) : ['N', m.phases[0] ?? 'L'];
}

const surge: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  // un carré vert sous chaque vis (N, L1, L2, L3)
  const cells = html`<span class="zspds">${surgeCols(m).map(() => html`<i class="zspd sq ${st === false ? 'bad' : 'ok'}"></i>`)}</span>`;
  return html`${zone('sp', cells)}${cal(m, 'SPD')}${m.note ? html`<div class="print sm">${m.note}</div>` : nothing}`;
};

/** Prise modulaire 2P+T : face ronde avec deux alvéoles et la broche de terre. */
const socket: Face = ({ mod: m }) => html`${zone('so', html`<svg class="zsock" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="#e9ebee"/><circle cx="9.5" cy="16" r="2.2" fill="#222"/><circle cx="20.5" cy="16" r="2.2" fill="#222"/><rect x="13.6" y="3" width="2.8" height="5" rx="1.2" fill="#222"/></svg><b class="zlab">2P+T</b>`)}${cal(m)}`;

/** Interrupteur sectionneur : symbole normalisé (lame inclinée + barre de coupure), voyant d'état si `state_entity`. */
const disconnector: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('sd', html`<svg class="zsd" viewBox="0 0 30 30" aria-hidden="true"><g stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" fill="none"><path d="M15 2v8"/><path d="${st === false ? 'M15 10l9 7' : 'M15 10l7 11'}"/><path d="${st === false ? 'M19 11l5 -4' : 'M17.4 14.4l6 -3'}"/><path d="M15 21v7"/></g></svg><b class="zlab">I-O</b>${st === null ? nothing : lens(st)}`)}${cal(m)}`;
};

const meter: Face = ({ mod: m, power }) => html`
  ${zone('mt', html`<span class="zlcd">${power.value !== null ? fmtMeasure(power.kind, power.value) : '- - -'}</span>`)}${cal(m, m.label ?? 'kWh')}`;

const free: Face = () => html`<div class="blank"></div>`;

const custom: Face = ({ mod: m }) => html`${zone('cu', m.icon ? html`<ha-icon icon=${m.icon}></ha-icon>` : nothing)}${cal(m)}`;

export const FACES: Record<string, Face> = {
  differential, breaker, contactor_daynight: daynight, contactor, relay, impulse, psu, surge, socket, switch_disconnector: disconnector, meter, free, custom,
};
