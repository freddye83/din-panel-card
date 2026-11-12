# DIN Panel Card — contexte du projet

Carte Lovelace personnalisée pour Home Assistant (`custom:din-panel-card`) : vue réaliste de tableaux électriques modulaires (tableaux > rangées > modules DIN) et vue « schéma » unifilaire SVG. Projet de Eric (La Seyne-sur-Mer), prêt pour HACS. Dépôt GitHub de référence pour la vue schéma : JohannBlais/lovelace-electrical-panel-card (carte distincte que Eric utilise déjà : d'où le nom `din-panel-card`).

## Règles de travail (demandées par Eric)
- **Répondre en français**, concis, technique et direct.
- **À chaque modification : incrémenter la version dans `package.json`** (mineure pour une évolution, ex. 1.14.0 → 1.15.0) et l'**annoncer dans la réponse** (« Version x.y.z »). Mettre à jour `CHANGELOG.md` (+ `README.md` si la config change).
- Ne pas demander quelle version d'une carte/outil il utilise : supposer la dernière, consulter GitHub si besoin.
- Priorités : 1) qualité graphique, 2) ne perdre aucune donnée / fonctionnalité, 3) configuration simple.
- Livrables habituels : `dist/din-panel-card.js` (bundle), zip du projet (sans `node_modules`), YAML d'exemple.

## Stack
TypeScript strict, Lit 3 (`html`/`svg`), bundle esbuild ESM → `dist/din-panel-card.js`. Version injectée via `define __CARD_VERSION__` (voir `scripts/build.mjs`, `src/env.d.ts`) et affichée dans la console du navigateur.

## Commandes
```
npm install
npm run typecheck     # tsc --noEmit
npm run build         # typecheck + bundle -> dist/din-panel-card.js
npm test              # tsx --test (config + état), 20 tests
npm run smoke         # rendu jsdom (vues tableau/schéma, repli, dialogue)
npm run regress       # assertions jsdom de non-régression (schéma, vue mémorisée, langue, LED, clavier)
npm run migrate       # convertit un ancien YAML groups/circuits
```
Vérifier systématiquement : build + tests + smoke + regress. Pour un contrôle visuel : Playwright/Chromium en chargeant `dist/din-panel-card.js` avec un `hass` simulé (les `ha-icon` ne s'affichent pas hors HA).

## Architecture (`src/`)
- `din-panel-card.ts` — élément `DinPanelCard` : `setConfig`, `hass`, rendu, barre d'outils (bascule tableau/schéma, déplier/replier), cadre « Arrivée » (`_summary`), ResizeObserver, enregistrement `customCards`. Re-rendu seulement si une entité suivie (`collectEntities`) ou le thème change.
- `editor.ts` — éditeur visuel (`ha-form`) : général (titre, `incoming_title`, largeur, `modules_per_row`, repli, vue, total + phases L1/L2/L3 : entity/current/tension/max), tableaux, rangées, modules, zones.
- `config.ts` — normalisation : ancien format `groups/circuits` → `panels/rows/modules` (`legacyToPanels`, aucune donnée perdue, testé), alias de types, valeurs par défaut (pôles/largeur), enfants d'un différentiel = modules suivants jusqu'au prochain différentiel, `validateConfig`, `collectEntities`.
- `types.ts` — types config brute et modèle normalisé.
- `utils/state.ts` — lecture des capteurs : `readMeasure` (type par unité : W/kW→puissance, Wh/kWh→énergie, A/mA→intensité, V→tension ; repli device_class), `modulePower` → `Power.counters` (un compteur par type, sommes par type pour zones/enfants, `current_sensor` à côté de `sensor`), `headMeasures`/`headGauges` (lignes d'entrée : `entity` = W ou kWh seulement, `current_sensor`, `voltage_sensor` sinon U ≈ P/I), `isOn`, `loadLimit`, formats (`fmtMeasure`, `short` = 1 décimale kWh).
- `utils/layout.ts` — `chunkByWidth` (rangées en rails de N modules). `utils/i18n.ts` — fr/en.
- `components/module.ts` (+ `modules/faces.ts` : visuel par type), `row.ts`, `panel.ts`, `circuit-details.ts` (dialogue), `diagram.ts` (vue schéma SVG), `ctx.ts`.
- `styles.ts` — tout le CSS (`cardStyles`, `editorStyles`).

## Modèle de configuration (résumé, détails dans README.md / examples/)
```yaml
type: custom:din-panel-card
title, language, module_width, max_width, modules_per_row, collapsed, view: panel|tree, incoming_title
sensors: { total: {entity, current_sensor, voltage_sensor, max_w}, phases: { l1: {…}, l2: {…}, l3: {…} } }
panels:
  - id, label, modules_per_row
    rows:
      - id, label, phases, accent
        modules:
          - { id, type, label, amp, poles, width, mA, class, curve, usage, phases,
              sensor, current_sensor, voltage_sensor, state_entity, icon, max_w, accent, output,
              zones: [{ floor, room, icon, sensor }] }
```
Types : `differential, breaker, contactor_daynight, contactor, relay, impulse (télérupteur), psu, surge, meter, free, custom` (+ alias : `breaker_3p`, `relais`, `telerupteur`, `alimentation`…). Ancien format `groups` toujours accepté.

## Comportements à connaître
- Un différentiel protège les modules qui le suivent ; sa mesure = capteur propre, sinon somme zones, sinon somme enfants (une somme par type de mesure, côte à côte).
- Couleurs par type de mesure : puissance vert, kWh ambre, intensité bleu, tension violet (modules, pastilles du schéma, cadre Arrivée).
- Vue tableau (style « schéma d'installation », 1.17) : modules blancs accolés (liseré noir), bornes à vis + repère N, id dans la bande bleutée au-dessus de la manette (sauf différentiel/libre), bloc noir central propre à chaque type (`faces.ts` : `zone`/`blk`), calibre/repère dans un cadre à filets rouges, mesures sous le calibre, légende dessous (pictogramme encadré, libellé horizontal, `section` en rouge), peigne bleu + rail DIN, obturateur gris pour `free`. 1 DIN = 2 bornes minimum, pas de nombre de pôles affiché, état coloré (liseré vert/rouge) pour contacteurs/relais/télérupteurs avec `state_entity`, survol = liste étage/pièce, largeur fixe via `modules_per_row`.
- Vue schéma (SVG) : ligne de chaque différentiel = [id du différentiel] « libellé rangée - libellé différentiel » (parties vides omises) ; troncs de phases, boîtes d'id, pastilles de mesure côte à côte, jauge horizontale sur L1/L2/L3 (pas sur Total), pointillés seulement s'il y a une info en face, pastille ON/OFF, icônes de zone après l'étage et avant la pièce, repli au niveau tableau / rangée / zone.
- Alias `relay` = relais (avant 1.7 : télérupteur) — changement cassant documenté.
- Les icônes `ha-icon` dans le SVG passent par un `foreignObject` 24 px réduit via `scale(0.46)`.

## Points non vérifiés / pistes
- `view:` du YAML prioritaire ; sinon vue mémorisée par carte (localStorage, clé = hash titre + tableaux).
- Rendu validé en jsdom et Chromium seul, pas dans Home Assistant : surveiller les retours visuels d'Eric.
- Infobulles = attribut `title` natif (peu adapté au tactile).
- Le code source de la carte de référence (JohannBlais) n'a pas pu être lu directement (accès GitHub refusé) : la parité du schéma repose sur son README.

## Fichiers du dépôt
`CHANGELOG.md` (historique 1.0 → courant), `README.md`, `hacs.json`, `examples/{legacy,migrated,full-example}.yaml`, `scripts/{build.mjs,migrate.ts,smoke.mjs}`, `tests/{config,state}.test.ts`. Ne pas committer `node_modules/`.
