export type ModuleType =
  | 'differential' | 'breaker' | 'contactor_daynight' | 'contactor'
  | 'relay' | 'impulse' | 'psu' | 'surge' | 'meter' | 'free' | 'custom';
export type Usage = 'power' | 'socket' | 'light' | 'other';
export type Lang = 'fr' | 'en';

export interface HassEntity { state: string; attributes: Record<string, any>; }
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes?: { darkMode?: boolean };
  language?: string;
}

/* ---------- Configuration brute (YAML) ---------- */
export interface ZoneConfig { floor?: string; room?: string; icon?: string; sensor?: string; }

export interface ModuleConfig {
  id?: string | number;
  type?: string;
  label?: string;
  poles?: number;
  width?: number;
  amp?: number;
  mA?: number;
  class?: string;
  curve?: string;
  usage?: Usage;
  icon?: string;
  accent?: string;
  phases?: string[];
  sensor?: string;
  current_sensor?: string;
  voltage_sensor?: string;
  state_entity?: string;
  max_w?: number;
  zones?: (ZoneConfig | string)[];
  note?: string;
  output?: string;   // alimentation : sortie, ex. « 24 V DC »
  section?: string | number; // section du câble (mm²), affichée sous le libellé
  circuit?: string | number; // référence à un circuit de l'ancien format groups
  group?: string | number;   // référence à un groupe de l'ancien format
}
export interface RowConfig { id?: string; label?: string; phases?: string[]; accent?: string; modules?: ModuleConfig[]; }
export interface PanelConfig { id?: string; label?: string; modules_per_row?: number; rows?: RowConfig[]; }

export interface LegacyCircuit extends Omit<ModuleConfig, 'type'> { type?: string; }
export interface LegacyGroup extends Omit<ModuleConfig, 'type'> { circuits?: LegacyCircuit[]; }

export interface SensorRef { entity?: string; current_sensor?: string; voltage_sensor?: string; max_w?: number; }
export interface CardConfig {
  type: string;
  language?: Lang;
  title?: string;
  incoming_title?: string;
  nominal_voltage?: number;   // tension nominale (V) pour la limite W d'un calibre A (défaut 230)
  module_width?: number;
  view?: 'panel' | 'tree';
  max_width?: number;
  modules_per_row?: number;  // capacité par défaut d'une rangée (modules DIN), surchargeable par tableau
  collapsed?: 'none' | 'zones' | 'rows' | 'panels';
  floors?: Record<string, { bg?: string; fg?: string }>;
  sensors?: { total?: SensorRef; phases?: Record<string, SensorRef> };
  panels?: PanelConfig[];
  groups?: LegacyGroup[];
  [k: string]: unknown;
}

/* ---------- Modèle normalisé ---------- */
export interface Zone { floor?: string; room?: string; icon?: string; sensor?: string; }
export interface Module {
  id: string; type: ModuleType; label?: string; poles: number; width: number;
  amp?: number; mA?: number; cls?: string; curve?: string; usage: Usage;
  icon?: string; accent?: string; phases: string[]; sensor?: string;
  current_sensor?: string; voltage_sensor?: string; state_entity?: string;
  max_w?: number; zones: Zone[]; note?: string; output?: string; section?: string; volts?: number;
  children?: Module[]; // pour un différentiel : modules qu'il protège
}
export interface Row { id: string; label?: string; phases: string[]; accent?: string; modules: Module[]; }
export interface Panel { id: string; label?: string; capacity?: number; rows: Row[]; }
