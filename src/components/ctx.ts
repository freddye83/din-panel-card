import type { HomeAssistant, Lang, Module } from '../types';
import type { Matcher } from '../utils/search';

export interface Ctx {
  hass: HomeAssistant;
  lang: Lang;
  select: (m: Module) => void;
  moreInfo: (entityId: string) => void;
  /** Recherche active : prédicat de correspondance (absent = pas de filtre). */
  search?: Matcher;
}

export const DEFAULT_ICONS: Record<string, string> = {
  power: 'mdi:flash', socket: 'mdi:power-socket-eu', light: 'mdi:lightbulb', other: 'mdi:electric-switch',
  differential: 'mdi:current-ac', surge: 'mdi:flash-alert', meter: 'mdi:counter',
  contactor: 'mdi:electric-switch-closed', contactor_daynight: 'mdi:theme-light-dark', impulse: 'mdi:toggle-switch', relay: 'mdi:electric-switch', psu: 'mdi:power-plug-outline',
};
