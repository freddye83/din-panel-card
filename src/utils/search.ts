import type { Lang, Module, Panel, Row } from '../types';
import { t } from './i18n';

/** Minuscules, sans accents. */
export const norm = (s: unknown): string => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export type Matcher = (m: Module, row: Row, panel: Panel) => boolean;

/** Texte indexé d'un module : id, libellé, type (brut et traduit), calibre, zones, rangée, tableau, entités. */
export function haystack(m: Module, row: Row, panel: Panel, lang: Lang): string {
  const amp = m.amp !== undefined ? [`${m.amp}a`, `${m.amp} a`, `${m.amp}`, `${m.curve ?? ''}${m.amp}`] : [];
  return norm([
    m.id, m.label, m.type, t(lang, `t_${m.type}`), ...amp, m.mA !== undefined ? `${m.mA}ma` : '', m.cls, m.section, m.output, m.note,
    ...m.zones.flatMap((z) => [z.floor, z.room]), row.id, row.label, panel.id, panel.label,
    m.sensor, m.current_sensor, m.voltage_sensor, m.state_entity, ...m.zones.map((z) => z.sensor),
  ].filter((x) => x !== undefined && x !== '').join(' | '));
}

/** Requête multi-termes : tous les termes doivent être présents (ET) ; `-terme` exclut. Retourne null si la requête est vide. */
export function makeMatcher(query: string, lang: Lang): Matcher | null {
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  const inc = tokens.filter((x) => !x.startsWith('-')), exc = tokens.filter((x) => x.startsWith('-') && x.length > 1).map((x) => x.slice(1));
  if (!inc.length && !exc.length) return null;
  return (m, row, panel) => {
    if (m.type === 'free' && !m.label) return false;
    const h = haystack(m, row, panel, lang);
    return inc.every((x) => h.includes(x)) && !exc.some((x) => h.includes(x));
  };
}

/** Modules correspondants dans l'ordre d'affichage (différentiel + enfants parcourus à plat). */
export function countMatches(panels: Panel[], test: Matcher): number {
  let n = 0;
  for (const p of panels) for (const r of p.rows) for (const m of r.modules) if (test(m, r, p)) n++;
  return n;
}
