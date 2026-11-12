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
const zone = (cls: string, inner: TemplateResult | typeof nothing) => html`<div class="zone"><div class="blk ${cls}">${inner}</div></div>`;
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

const surge: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`${zone('sp', html`<i class="zspd ${st === false ? 'bad' : 'ok'}"></i>`)}${cal(m, 'SPD')}${m.note ? html`<div class="print sm">${m.note}</div>` : nothing}`;
};

const meter: Face = ({ mod: m, power }) => html`
  ${zone('mt', html`<span class="zlcd">${power.value !== null ? fmtMeasure(power.kind, power.value) : '- - -'}</span>`)}${cal(m, m.label ?? 'kWh')}`;

const free: Face = () => html`<div class="blank"></div>`;

const custom: Face = ({ mod: m }) => html`${zone('cu', m.icon ? html`<ha-icon icon=${m.icon}></ha-icon>` : nothing)}${cal(m)}`;

export const FACES: Record<string, Face> = {
  differential, breaker, contactor_daynight: daynight, contactor, relay, impulse, psu, surge, meter, free, custom,
};
