import type { Module } from '../types';

/** Répartit les modules d'une rangée en lignes de rail d'au plus `capacity` modules DIN.
 *  Sans capacité : une seule ligne. Un module plus large que le rail occupe seul une ligne. */
export function chunkByWidth(mods: Module[], capacity?: number): Module[][] {
  if (!capacity || capacity <= 0) return [mods];
  const lines: Module[][] = [[]];
  let used = 0;
  for (const m of mods) {
    if (used + m.width > capacity && lines[lines.length - 1].length) { lines.push([]); used = 0; }
    lines[lines.length - 1].push(m);
    used += m.width;
  }
  return lines;
}
