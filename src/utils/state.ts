import type { HomeAssistant, Module } from '../types';

export type Kind = 'power' | 'energy' | 'current' | 'voltage';

/** Lecture brute d'une entité (tension, intensité d'un capteur dédié…). */
export interface Reading { status: 'none' | 'ok' | 'unavailable'; value: number | null; }
/** Mesure typée, normalisée en W (puissance), Wh (énergie) ou A (intensité). */
export interface Measure { status: 'none' | 'ok' | 'unavailable'; value: number | null; kind: Kind; }
export type Source = 'sensor' | 'zones' | 'children';
/** Un compteur = une somme pour un type de mesure (W, kWh ou A). */
export interface Counter { kind: Kind; value: number | null; partial: boolean; source: Source; }
export interface Power {
  configured: boolean;
  value: number | null;   // = counters[0]
  kind: Kind;
  source: Source | 'none';
  partial: boolean;
  counters: Counter[];    // un compteur par type, ordonnés W → kWh → A
}

const bad = (s: string | undefined) => !s || s === 'unavailable' || s === 'unknown';

export function readEntity(hass: HomeAssistant, id?: string, kind: 'current' | 'raw' = 'raw'): Reading {
  if (!id) return { status: 'none', value: null };
  const s = hass.states[id];
  if (!s || bad(s.state)) return { status: 'unavailable', value: null };
  let v = parseFloat(s.state);
  if (!Number.isFinite(v)) return { status: 'unavailable', value: null };
  if (kind === 'current' && s.attributes?.unit_of_measurement === 'mA') v /= 1000;
  return { status: 'ok', value: v };
}

const UNITS: Record<string, [Kind, number]> = {
  W: ['power', 1], kW: ['power', 1e3], MW: ['power', 1e6], mW: ['power', 1e-3],
  Wh: ['energy', 1], kWh: ['energy', 1e3], MWh: ['energy', 1e6],
  A: ['current', 1], mA: ['current', 1e-3], V: ['voltage', 1], mV: ['voltage', 1e-3], kV: ['voltage', 1e3],
};
const CLASSES: Record<string, [Kind, number]> = { power: ['power', 1], energy: ['energy', 1e3], current: ['current', 1], voltage: ['voltage', 1] };

/** Lit un capteur de puissance (W/kW), de consommation (Wh/kWh) ou d'intensité (A/mA).
 *  Le type vient de l'unité, à défaut de la device_class, à défaut on suppose des watts. */
export function readMeasure(hass: HomeAssistant, id?: string, fallback: Kind = 'power'): Measure {
  if (!id) return { status: 'none', value: null, kind: fallback };
  const s = hass.states[id];
  const a = s?.attributes ?? {};
  const [kind, f] = UNITS[a.unit_of_measurement as string] ?? CLASSES[a.device_class as string] ?? [fallback, 1];
  if (!s || bad(s.state)) return { status: 'unavailable', value: null, kind };
  const v = parseFloat(s.state);
  return Number.isFinite(v) ? { status: 'ok', value: v * f, kind } : { status: 'unavailable', value: null, kind };
}

export function isOn(hass: HomeAssistant, id?: string): boolean | null {
  if (!id) return null;
  const s = hass.states[id]?.state?.toLowerCase();
  if (!s || bad(s)) return null;
  if (['on', 'true', 'closed', 'active', 'enabled', 'home', 'heat', 'playing', '1'].includes(s)) return true;
  if (['off', 'false', 'open', 'inactive', 'disabled', 'not_home', 'idle', 'standby', '0'].includes(s)) return false;
  const n = parseFloat(s);   // capteur numérique : > 0 = actif
  return Number.isFinite(n) ? n > 0 : null;
}

const ORDER: Kind[] = ['power', 'energy', 'current', 'voltage'];
const byOrder = (a: Counter, b: Counter) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind);

/** Regroupe des mesures par type et additionne chaque groupe (un compteur par type). */
function groupCounters(items: { value: number | null; kind: Kind; partial?: boolean }[], source: Source, expected = items.length): Counter[] {
  const kinds = [...new Set(items.map((i) => i.kind))];
  const valid = kinds.filter((k) => items.some((i) => i.kind === k && i.value !== null));
  const use = valid.length ? valid : kinds.slice(0, 1);
  return use.map((k) => {
    const ok = items.filter((i) => i.kind === k && i.value !== null);
    return {
      kind: k, source,
      value: ok.length ? ok.reduce((a, i) => a + (i.value as number), 0) : null,
      partial: ok.length < expected || ok.some((i) => i.partial),
    };
  }).sort(byOrder);
}

const mk = (counters: Counter[]): Power => {
  const c = counters[0];
  return counters.length
    ? { configured: true, value: c.value, kind: c.kind, source: c.source, partial: c.partial, counters }
    : { configured: false, value: null, kind: 'power', source: 'none', partial: false, counters: [] };
};

/** Mesures d'un module : capteurs propres (sensor + current_sensor) ; à défaut, sommes des zones puis des circuits protégés,
 *  une somme par type de mesure. Les types déjà fournis par un capteur propre ne sont pas complétés. */
const cache = new WeakMap<Module, { h: HomeAssistant; p: Power }>();
/** Résultat mis en cache par module tant que l'objet `hass` est le même (le schéma l'appelle plusieurs fois par module). */
export function modulePower(hass: HomeAssistant, m: Module): Power {
  const c = cache.get(m);
  if (c && c.h === hass) return c.p;
  const p = computePower(hass, m);
  cache.set(m, { h: hass, p });
  return p;
}

function computePower(hass: HomeAssistant, m: Module): Power {
  const own: Counter[] = [];
  const addOwn = (id: string | undefined, fb: Kind) => {
    if (!id) return;
    const r = readMeasure(hass, id, fb);
    if (!own.some((c) => c.kind === r.kind)) own.push({ kind: r.kind, value: r.value, partial: false, source: 'sensor' });
  };
  addOwn(m.sensor, 'power');
  addOwn(m.current_sensor, 'current');
  let agg: Counter[] = [];
  const zs = m.zones.filter((z) => z.sensor);
  if (zs.length) {
    agg = groupCounters(zs.map((z) => readMeasure(hass, z.sensor)), 'zones', m.zones.length);
  } else if (m.children?.length) {
    const ps = m.children.map((c) => modulePower(hass, c));
    if (ps.some((p) => p.configured)) {
      const items = ps.flatMap((p) => p.counters.map((c) => ({ ...c, partial: c.partial })));
      agg = groupCounters(items, 'children', ps.length);
      // un enfant sans capteur ou sans valeur rend la somme partielle
      if (ps.some((p) => !p.configured)) agg = agg.map((c) => ({ ...c, partial: true }));
    }
  }
  const all = [...own, ...agg.filter((c) => !own.some((o) => o.kind === c.kind))].sort(byOrder);
  return mk(all);
}

/** Valeur de référence de la jauge : W (puissance) ou A (intensité) ; aucune jauge pour une énergie. */
export function loadLimit(m: Module, kind: Kind = 'power'): number | undefined {
  if (kind === 'energy' || kind === 'voltage') return undefined;
  if (kind === 'current') return m.amp;
  if (m.max_w) return m.max_w;
  if (m.amp) return m.amp * (m.volts ?? 230) * (m.poles >= 3 ? 3 : 1);
  return undefined;
}

/** Intensité d'un module : compteur A s'il existe, sinon P / U (capteur de tension). */
export function moduleCurrent(hass: HomeAssistant, m: Module, p: Power): number | null {
  const c = p.counters.find((x) => x.kind === 'current');
  if (c) return c.value;
  const pw = p.counters.find((x) => x.kind === 'power');
  const v = readEntity(hass, m.voltage_sensor);
  return v.value && pw && pw.value !== null ? pw.value / v.value : null;
}

export function fmtPower(w: number): string {
  const a = Math.abs(w);
  if (a >= 10000) return `${(w / 1000).toFixed(1)} kW`;
  if (a >= 1000) return `${(w / 1000).toFixed(2)} kW`;
  return `${Math.round(w)} W`;
}
export function fmtEnergy(wh: number, short = false): string {
  const k = wh / 1000, a = Math.abs(k);
  return `${k.toFixed(short ? (a >= 1000 ? 0 : 1) : a >= 1000 ? 0 : a >= 100 ? 1 : 2)} kWh`;
}
export function fmtCurrent(amps: number): string {
  const a = Math.abs(amps);
  return `${amps.toFixed(a >= 100 ? 0 : a >= 10 ? 1 : 2)} A`;
}
export const fmtVoltage = (v: number): string => `${v.toFixed(v >= 100 ? 0 : 1)} V`;
export const fmtMeasure = (kind: Kind, v: number, short = false): string =>
  kind === 'energy' ? fmtEnergy(v, short) : kind === 'current' ? fmtCurrent(v) : kind === 'voltage' ? fmtVoltage(v) : fmtPower(v);

export interface HeadRef { entity?: string; current_sensor?: string; voltage_sensor?: string; max_w?: number; }
export interface HeadItem { kind: Kind; value: number | null; entity: string; approx?: boolean; }
/** Mesures d'une ligne d'entrée : entity (W ou kWh — une intensité y est ignorée), current_sensor (A),
 *  tension : capteur dédié, sinon U ≈ P / I quand P (W/VA) et I (A) sont connus. */
export function headMeasures(hass: HomeAssistant, ref?: HeadRef): HeadItem[] {
  const out: HeadItem[] = [];
  if (!ref) return out;
  let p: Measure | undefined;
  if (ref.entity) {
    const r = readMeasure(hass, ref.entity);
    if (r.kind === 'power' || r.kind === 'energy') { out.push({ kind: r.kind, value: r.value, entity: ref.entity }); p = r; }
  }
  let i: Measure | undefined;
  if (ref.current_sensor) {
    i = readMeasure(hass, ref.current_sensor, 'current');
    out.push({ kind: 'current', value: i.value, entity: ref.current_sensor });
  }
  if (ref.voltage_sensor) {
    const v = readMeasure(hass, ref.voltage_sensor, 'voltage');
    out.push({ kind: 'voltage', value: v.value, entity: ref.voltage_sensor });
  } else if (p?.kind === 'power' && p.value !== null && i?.value && i.value > 0.05 && p.value > 0) {
    out.push({ kind: 'voltage', value: p.value / i.value, entity: ref.current_sensor!, approx: true });
  }
  return out.sort((a, b) => ['power', 'energy', 'current', 'voltage'].indexOf(a.kind) - ['power', 'energy', 'current', 'voltage'].indexOf(b.kind));
}

export interface HeadGauge { key: string; label: string; items: HeadItem[]; pct: number | null; limit?: number; entity?: string; }
/** Jauges d'en-tête : total puis phases. Limite = max_w ; à défaut phase = max_w total / nb de phases, sinon plus forte phase. */
export function headGauges(hass: HomeAssistant, sensors: { total?: HeadRef; phases?: Record<string, HeadRef> } | undefined, totalLabel: string): HeadGauge[] {
  if (!sensors) return [];
  const ph = Object.entries(sensors.phases ?? {}).filter(([, r]) => r && (r.entity || r.current_sensor || r.voltage_sensor));
  const pw = (r?: HeadRef) => headMeasures(hass, r).find((i) => i.kind === 'power')?.value ?? null;
  const strongest = Math.max(0, ...ph.map(([, r]) => pw(r) ?? 0));
  const mk = (key: string, label: string, r: HeadRef | undefined, limit?: number): HeadGauge | undefined => {
    const items = headMeasures(hass, r);
    if (!items.length) return undefined;
    const p = items.find((i) => i.kind === 'power');
    const pct = p && p.value !== null && limit ? Math.max(0, p.value) / limit : null;
    return { key, label, items, pct, limit, entity: r?.entity ?? r?.current_sensor ?? r?.voltage_sensor };
  };
  const phLimit = (r?: HeadRef) => r?.max_w ?? (sensors.total?.max_w && ph.length ? sensors.total.max_w / ph.length : strongest || undefined);
  return [
    mk('total', totalLabel, sensors.total, sensors.total?.max_w),
    ...ph.map(([k, r]) => mk(k.toUpperCase(), k.toUpperCase(), r, phLimit(r))),
  ].filter((g): g is HeadGauge => !!g);
}
