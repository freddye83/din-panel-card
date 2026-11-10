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
const stateTag = (st: boolean | null) => (st === null ? nothing : html`<div class="stt ${st ? 'on' : 'off'}">${st ? 'ON' : 'OFF'}</div>`);

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
  return html`${ampText(m)}${levers(m, st !== false)}`;
};

const differential: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  const on = st !== false;
  return html`
    <div class="band">${m.cls ?? 'DIFF'}</div>
    ${m.amp !== undefined ? html`<div class="print amp">${m.amp}A</div>` : nothing}
    ${m.mA !== undefined ? html`<div class="mA">${m.mA} mA</div>` : nothing}
    <div class="levers single ${on ? 'on' : 'off'}"><div class="slot wide"><div class="lever ${on ? 'on' : 'off'}"></div></div></div>
    <div class="dtools"><span class="test">T</span><span class="win ${on ? 'ok' : 'trip'}"></span></div>`;
};

const daynight: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  const pos = st === true ? 'on' : st === false ? 'off' : 'auto';
  return html`${ampText(m)}
    <div class="band dn ${pos}">${st === true ? 'ON' : st === false ? 'OFF' : 'J / N'}</div>
    <div class="sel s-${pos}"><span>I</span><span>A</span><span>O</span><i class="knob ${pos}"></i></div>
    <div class="print sm">J/N</div>`;
};

const contactor: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`<div class="coil"><span>A1</span><span>A2</span></div>
    ${ampText(m)}<div class="print">KM</div>
    <div class="ind ${st === true ? 'on' : ''}"></div>${stateTag(st)}`;
};

/** Relais modulaire : bobine A1/A2, voyant et indicateur mécanique ; état lu depuis state_entity (capteur, switch…). */
const relay: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`<div class="band">REL</div>
    <div class="coil dark"><span>A1</span><span>A2</span></div>
    ${ampText(m)}
    <div class="led-lens ${st === true ? 'on' : st === false ? 'off' : ''}"></div>
    <div class="flag ${st === true ? 'on' : 'off'}"></div>
    ${stateTag(st)}`;
};

/** Télérupteur : bouton-poussoir, voyant d'état, repère TL. */
const impulse: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`<div class="band">TL</div>
    ${ampText(m)}
    <div class="win ${st === false ? 'trip' : st === true ? 'ok' : 'idle'} big"></div>
    <div class="push"></div>
    ${stateTag(st)}`;
};

/** Alimentation (AC/DC modulaire) : tension de sortie, potentiomètre, voyant DC OK. */
const psu: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`<div class="band">AC / DC</div>
    ${m.output ? html`<div class="out">${m.output}</div>` : nothing}
    ${ampText(m)}
    <div class="pot"><i></i></div>
    <div class="dcok"><span class="ind ${st === false ? 'bad' : 'on'}"></span><small>DC OK</small></div>`;
};

const surge: Face = ({ mod: m, ctx }) => {
  const st = isOn(ctx.hass, m.state_entity);
  return html`<div class="print">SPD</div>
    <div class="spd ${st === false ? 'bad' : 'ok'}"></div>
    ${m.note ? html`<div class="print sm">${m.note}</div>` : nothing}`;
};

const meter: Face = ({ mod: m, power }) => html`
  <div class="print">${m.label ?? ''}</div>
  <div class="lcd">${power.value !== null ? fmtMeasure(power.kind, power.value) : '- - -'}</div>
  <div class="btns"><i></i><i></i></div>`;

const free: Face = () => html`<div class="blank"></div>`;

const custom: Face = ({ mod: m }) => html`
  ${m.icon ? html`<ha-icon icon=${m.icon}></ha-icon>` : nothing}${ampText(m)}`;

export const FACES: Record<string, Face> = {
  differential, breaker, contactor_daynight: daynight, contactor, relay, impulse, psu, surge, meter, free, custom,
};
