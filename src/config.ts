import type {
  CardConfig, LegacyCircuit, LegacyGroup, Module, ModuleConfig, ModuleType, Panel, PanelConfig,
  Row, RowConfig, Usage, Zone, ZoneConfig,
} from './types';

const ALIASES: Record<string, { type: ModuleType; poles?: number }> = {
  differential: { type: 'differential' }, rcd: { type: 'differential' }, diff: { type: 'differential' },
  breaker: { type: 'breaker' }, breaker_1p: { type: 'breaker', poles: 1 }, breaker_2p: { type: 'breaker', poles: 2 },
  breaker_3p: { type: 'breaker', poles: 3 }, breaker_4p: { type: 'breaker', poles: 4 },
  three_phase: { type: 'breaker', poles: 3 }, tetrapolar: { type: 'breaker', poles: 4 },
  contactor_daynight: { type: 'contactor_daynight' }, daynight: { type: 'contactor_daynight' },
  contactor: { type: 'contactor' }, power_contactor: { type: 'contactor' },
  impulse: { type: 'impulse' }, telerupteur: { type: 'impulse' }, tele: { type: 'impulse' },
  relay: { type: 'relay' }, relais: { type: 'relay' },
  psu: { type: 'psu' }, power_supply: { type: 'psu' }, alimentation: { type: 'psu' },
  surge: { type: 'surge' }, surge_arrester: { type: 'surge' },
  meter: { type: 'meter' }, free: { type: 'free' }, custom: { type: 'custom' },
};

const DEFAULTS: Record<ModuleType, { poles: number; width?: number }> = {
  differential: { poles: 2 }, breaker: { poles: 1 }, contactor_daynight: { poles: 1, width: 2 },
  contactor: { poles: 1, width: 2 }, impulse: { poles: 2, width: 1 }, relay: { poles: 2, width: 1 }, psu: { poles: 2, width: 2 }, surge: { poles: 2 },
  meter: { poles: 2, width: 4 }, free: { poles: 1, width: 1 }, custom: { poles: 1, width: 1 },
};

const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));
const str = (v: unknown): string | undefined => (v === undefined || v === null || v === '' ? undefined : String(v));
function clean<T extends object>(o: T): T {
  const r: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) if (v !== undefined && v !== null && v !== '') r[k] = v;
  return r as T;
}

/* ------------------------------------------------------------------ */
/* Ancien format (groups / circuits) -> panels / rows / modules        */
/* ------------------------------------------------------------------ */
export function legacyToPanels(groups: LegacyGroup[]): PanelConfig[] {
  const rows: RowConfig[] = groups.map((g) => {
    const threePhase = (g.phases?.length ?? 0) >= 3;
    const diff: ModuleConfig = clean({
      id: g.id, type: 'differential', label: g.label, poles: g.poles ?? (threePhase ? 4 : undefined), amp: g.amp, mA: g.mA,
      class: g.class, sensor: g.sensor, max_w: g.max_w, accent: g.accent,
    });
    const circuits: ModuleConfig[] = (g.circuits ?? []).map((c: LegacyCircuit) => {
      const { type, ...rest } = c;
      return clean({ ...rest, type: 'breaker', usage: type as Usage | undefined, poles: c.poles ?? (threePhase ? 3 : undefined) }) as ModuleConfig;
    });
    return clean({ id: String(g.id), label: g.label ?? String(g.id), phases: g.phases, accent: g.accent, modules: [diff, ...circuits] }) as RowConfig;
  });
  return [{ id: 'tableau_1', label: 'Tableau principal', rows }];
}

/* ------------------------------------------------------------------ */
/* Normalisation                                                       */
/* ------------------------------------------------------------------ */
interface Index { circuits: Map<string, LegacyCircuit>; groups: Map<string, LegacyGroup>; }

function buildIndex(groups?: LegacyGroup[]): Index {
  const idx: Index = { circuits: new Map(), groups: new Map() };
  for (const g of groups ?? []) {
    idx.groups.set(String(g.id), g);
    for (const c of g.circuits ?? []) if (!idx.circuits.has(String(c.id))) idx.circuits.set(String(c.id), c);
  }
  return idx;
}

function normZone(z: ZoneConfig | string): Zone {
  if (typeof z === 'string') return { room: z };
  return clean({ floor: str(z.floor), room: str(z.room), icon: z.icon, sensor: z.sensor });
}

function normModule(raw: ModuleConfig, row: { phases: string[]; id: string }, i: number, idx: Index): Module {
  let m: ModuleConfig = { ...raw };
  if (raw.circuit !== undefined && idx.circuits.has(String(raw.circuit))) {
    const c = idx.circuits.get(String(raw.circuit))!;
    const { type, ...rest } = c;
    m = { ...rest, type: 'breaker', usage: type as Usage | undefined, ...raw };
  }
  if (raw.group !== undefined && idx.groups.has(String(raw.group))) {
    const { circuits: _c, ...g } = idx.groups.get(String(raw.group))!;
    m = { ...g, type: 'differential', ...raw } as ModuleConfig;
  }
  const alias = ALIASES[String(m.type ?? 'breaker').toLowerCase()] ?? ALIASES.custom;
  const type = alias.type;
  const phases = (m.phases ?? row.phases).map((p) => String(p).toUpperCase());
  const def = DEFAULTS[type];
  // Pôles explicites (ou déduits d'un groupe triphasé) ; sinon la largeur garde sa valeur historique (1 DIN),
  // et un disjoncteur simple 1 DIN est dessiné avec 2 pôles (phase + neutre).
  const explicit = m.poles ?? alias.poles ?? (type === 'breaker' && phases.length >= 3 ? 3 : undefined);
  const width = clamp(Number(m.width ?? def.width ?? explicit ?? def.poles) || 1, 1, 12);
  const poles = clamp(Number(explicit ?? (type === 'breaker' && width === 1 ? 2 : def.poles)) || 1, 1, 4);
  const usage: Usage = (['power', 'socket', 'light'].includes(String(m.usage)) ? m.usage : 'other') as Usage;
  return {
    id: str(m.id) ?? `${row.id}-${i + 1}`, type, label: str(m.label), poles, width,
    amp: m.amp !== undefined ? Number(m.amp) : undefined, mA: m.mA !== undefined ? Number(m.mA) : undefined,
    cls: str(m.class), curve: str(m.curve), usage, icon: m.icon, accent: m.accent, phases,
    sensor: m.sensor, current_sensor: m.current_sensor, voltage_sensor: m.voltage_sensor,
    state_entity: m.state_entity, max_w: m.max_w !== undefined ? Number(m.max_w) : undefined,
    zones: (m.zones ?? []).map(normZone), note: str(m.note), output: str(m.output),
  };
}

function normRow(r: RowConfig, ri: number, idx: Index): Row {
  const id = str(r.id) ?? `row_${ri + 1}`;
  const phases = (r.phases ?? []).map((p) => String(p).toUpperCase());
  const modules = (r.modules ?? []).map((m, i) => normModule(m, { phases, id }, i, idx));
  // Un différentiel protège les modules qui le suivent jusqu'au prochain différentiel.
  let cur: Module | undefined;
  for (const m of modules) {
    if (m.type === 'differential') { cur = m; m.children = []; }
    else if (cur && m.type !== 'free' && m.type !== 'meter') cur.children!.push(m);
  }
  return { id, label: str(r.label), phases, accent: r.accent, modules };
}

/** Nombre de modules DIN par rangée : entier positif, sinon pas de largeur imposée. */
function capacityOf(v: unknown): number | undefined {
  const n = Math.floor(Number(v));
  return Number.isFinite(n) && n >= 1 ? Math.min(n, 60) : undefined;
}

export function normalizeConfig(cfg: CardConfig): Panel[] {
  const idx = buildIndex(cfg.groups);
  const raw = cfg.panels ?? (cfg.groups ? legacyToPanels(cfg.groups) : []);
  const volts = Number(cfg.nominal_voltage) > 0 ? Number(cfg.nominal_voltage) : undefined;
  const panels = raw.map((p, pi) => ({
    id: str(p.id) ?? `panel_${pi + 1}`, label: str(p.label),
    capacity: capacityOf(p.modules_per_row ?? cfg.modules_per_row),
    rows: (p.rows ?? []).map((r, ri) => normRow(r, ri, idx)),
  }));
  if (volts) for (const p of panels) for (const r of p.rows) for (const m of r.modules) m.volts = volts;
  return panels;
}

export function validateConfig(cfg: CardConfig): void {
  if (!cfg || (!cfg.panels && !cfg.groups)) {
    throw new Error("Configuration invalide : définir 'panels' (nouveau format) ou 'groups' (ancien format).");
  }
  if (cfg.max_width !== undefined && !(typeof cfg.max_width === 'number' && cfg.max_width > 0)) {
    throw new Error("'max_width' doit être un nombre positif de pixels (ex. 1100), sans unité.");
  }
  const bad = (v: unknown) => v !== undefined && !(Number.isInteger(v) && (v as number) >= 1);
  if (bad(cfg.modules_per_row) || (cfg.panels ?? []).some((p) => bad(p.modules_per_row))) {
    throw new Error("'modules_per_row' doit être un entier ≥ 1 (nombre de modules DIN par rangée).");
  }
  if (cfg.panels && !Array.isArray(cfg.panels)) throw new Error("'panels' doit être une liste.");
  if (cfg.groups && !Array.isArray(cfg.groups)) throw new Error("'groups' doit être une liste.");
}

export function collectEntities(cfg: CardConfig, panels: Panel[]): string[] {
  const s = new Set<string>();
  const add = (e?: string) => { if (e) s.add(e); };
  add(cfg.sensors?.total?.entity); add(cfg.sensors?.total?.current_sensor); add(cfg.sensors?.total?.voltage_sensor);
  for (const p of Object.values(cfg.sensors?.phases ?? {})) { add(p?.entity); add(p?.current_sensor); add(p?.voltage_sensor); }
  for (const p of panels) for (const r of p.rows) for (const m of r.modules) {
    add(m.sensor); add(m.current_sensor); add(m.voltage_sensor); add(m.state_entity);
    for (const z of m.zones) add(z.sensor);
  }
  return [...s];
}
