# DIN Panel Card

Carte Lovelace pour Home Assistant qui dessine un **vrai tableau électrique modulaire vu de face** : coffret, rangées, rail DIN, appareils de largeur proportionnelle à leur nombre de modules (1, 2, 3, 4…), bornes à vis, leviers, plaquettes de repérage. Les mesures viennent de tes entités HA et se mettent à jour en direct.

## Aperçu

**Vue tableau** : coffret réaliste, rail DIN, appareils à leur largeur réelle, valeurs de capteurs colorées par type (W, kWh, A, V).

![Vue tableau — rangées](docs/vue-tableau-rangees.png)

Cadre **Arrivée** (total sans jauge, puis L1/L2/L3 avec jauge, intensité et tension) au-dessus des tableaux :

![Vue tableau — arrivée et tableau principal](docs/vue-tableau-arrivee.png)

Alimentation, télérupteur et relais (état coloré, liseré vert = enclenché / rouge = déclenché) :

![Alimentation, télérupteur, relais](docs/modules-relais-alim.png)

**Vue schéma** (bouton en haut de la carte) : schéma unifilaire avec troncs de phases, jauges, pastilles de mesure et zones repliables.

![Vue schéma](docs/vue-schema.png)

## Installation

### Home Assistant 2026.11 et plus — Marketplace

Depuis la 2026.11, HACS est intégré à Home Assistant sous le nom de **Marketplace** (une installation séparée de HACS n'est plus possible ; les dépôts personnalisés déjà ajoutés dans HACS sont migrés automatiquement).

1. *Paramètres → **Marketplace*** (compte administrateur). À la première ouverture, lire l'avertissement et cocher la case d'acceptation.
2. Cliquer sur **Ajouter depuis un lien** et saisir : `https://github.com/freddye83/din-panel-card`
3. Valider la connexion GitHub (connexion par appareil : tu approuves sur GitHub, aucun mot de passe n'est saisi dans HA ; seules les infos publiques sont lues).
4. Ouvrir la carte dans la liste puis **Installer**. Le fichier est placé dans `www/community` et ajouté **automatiquement comme ressource** du tableau de bord.
5. **Recharger le navigateur** (Ctrl+F5), puis ajouter la carte : *Modifier le tableau de bord → Ajouter une carte → DIN Panel Card* (ou `type: custom:din-panel-card` en YAML).

Notes :
- Les dépôts ajoutés se retrouvent dans la page **Dépôts personnalisés** du Marketplace ; ils y restent tant qu'ils ne sont pas désinstallés.
- Les mises à jour apparaissent dans *Paramètres → Mises à jour* (vérification toutes les 6 h).
- Si tu gères les ressources du tableau de bord **en YAML**, le Marketplace ne peut pas l'ajouter : la fenêtre d'installation affiche la ligne à copier (`/local/community/din-panel-card/din-panel-card.js`, type `module`). Elle ne sera pas retirée automatiquement à la désinstallation.
- Si le dossier `www` n'existait pas au démarrage de HA, une réparation demande d'abord un redémarrage.

### Avant la 2026.11 — HACS

*HACS → ⋮ → Dépôts personnalisés* → URL du dépôt, catégorie **Dashboard** → installer → recharger le navigateur.

### Manuelle

Copier `dist/din-panel-card.js` dans `/config/www/`, puis *Paramètres → Tableaux de bord → ⋮ → Ressources* → ajouter `/local/din-panel-card.js` (type **Module JavaScript**).

## Configuration

```yaml
type: custom:din-panel-card
title: Tableaux électriques      # optionnel
language: fr                     # fr | en (défaut : langue de HA)
module_width: 46                 # px par module DIN (défaut 46)
nominal_voltage: 230             # tension (V) pour déduire une limite en W d'un calibre en A (défaut 230)
incoming_title: Arrivée           # titre du cadre d'arrivée (vue tableau) ; "" pour le masquer
modules_per_row: 18              # modules DIN max par rangée (vue tableau) : largeur du rail/coffret fixée en conséquence
view: panel                      # vue initiale : panel (tableau) | tree (arborescence)
floors:                          # optionnel : couleurs des pastilles d'étage (vue arborescence)
  RDC: { bg: '#38a169', fg: white }
sensors:                         # optionnel : synthèse en tête de carte
  total: { entity: sensor.zlinky_papp, max_w: 15000 }
  phases:                        # entity (W) et current_sensor (A) optionnels, affichés côte à côte
    l1: { entity: sensor.zlinky_puissance_l1, current_sensor: sensor.zlinky_iinst1 }   # voltage_sensor: optionnel, sinon U ≈ P/I
    l2: { entity: sensor.zlinky_puissance_l2 }
    l3: { entity: sensor.zlinky_puissance_l3 }
panels:
  - id: tableau_1
    label: Tableau principal
    rows:
      - id: row_1
        label: RDC
        phases: [L1]             # hérité par les modules
        accent: '#3182ce'        # couleur du bandeau des différentiels de la rangée
        modules:
          - { type: differential, id: ID1, amp: 40, mA: 30, poles: 2, class: AC }
          - { type: breaker, id: 1-1, amp: 16, curve: C, usage: socket, label: Prises, sensor: sensor.x_power,
              zones: [ { floor: RDC, room: Salon, sensor: sensor.tv_power } ] }
```
Exemple complet avec tous les types : [`examples/full-example.yaml`](examples/full-example.yaml).

### Champs d'un module

| Champ | Description |
|---|---|
| `type` | `differential`, `breaker` (alias `breaker_3p`, `breaker_4p`), `contactor_daynight`, `contactor`, `relay` (alias `relais`), `impulse` (alias `telerupteur`), `psu` (alias `alimentation`), `surge`, `meter`, `free`, `custom` (inconnu → `custom`) |
| `id`, `label` | identifiant (imprimé sur l'appareil) et libellé (plaquette) |
| `poles` / `width` | pôles (1-4) / largeur en modules DIN. Défauts : largeur = pôles ; jour/nuit et contacteur 2 ; compteur 4. Un disjoncteur sans `poles` en 1 DIN est dessiné avec 2 bornes (phase + neutre), sans changer sa largeur. Le nombre de pôles n'est pas imprimé sur l'appareil (il reste dans la fiche détaillée) |
| `amp`, `curve` | calibre (A) et courbe B/C/D (imprimée seulement si renseignée) |
| `mA`, `class` | sensibilité et type (AC, A, F, B) d'un différentiel |
| `usage` | `power`, `socket`, `light` : couleur de la plaquette et icône par défaut |
| `phases` | `[L1]`, `[L1, L2, L3]`… (défaut : celles de la rangée) |
| `sensor` | puissance (W, kW), **consommation (Wh, kWh) ou intensité (A, mA)** : le type est détecté par l'unité du capteur (à défaut sa `device_class`, à défaut des watts). Une intensité est comparée au calibre `amp` (jauge) ; une énergie n'a pas de jauge. Sans `sensor` : somme des capteurs des `zones`, puis pour un différentiel somme des circuits qu'il protège (affichée `≥` si partielle) |
| `current_sensor`, `voltage_sensor` | intensité (A) et tension (V) ; sans capteur d'intensité, I = P/U si la tension est connue |
| `state_entity` | position du levier / état du relais, du télérupteur, de l'alimentation (« DC OK ») : `switch`, `binary_sensor` ou **capteur** (on/off, active/inactive, 0/1, valeur numérique > 0) — lecture seule. L'état est coloré (vert = on, rouge = off) sur le module, et en pastille ON/OFF dans la vue schéma |
| `output` | alimentation : sortie imprimée (ex. `24 V DC`) |
| `max_w` | puissance max : base de la jauge et de la LED de charge (défaut : calibre × 230 V, ×3 si tripolaire) |
| `zones` | liste `{floor, room, icon, sensor}` affichée dans la fiche détaillée |
| `icon`, `accent`, `note` | icône, couleur de plaquette, texte libre |

Les champs absents ne produisent aucun élément à l'écran. Capteur indisponible/inconnu/absent : `n/d` grisé, jamais d'erreur. Au survol d'un module, la liste de ses étages / pièces s'affiche. Un clic sur un module ouvre sa fiche (calibre, pôles, valeurs, zones, circuits protégés) ; un clic sur un capteur ouvre sa fenêtre HA. La carte est **en lecture seule**.

### Vue schéma unifilaire

Un bouton en haut de la carte bascule entre la vue **Tableau** (rendu réaliste) et la vue **Schéma**, reprise de [lovelace-electrical-panel-card](https://github.com/JohannBlais/lovelace-electrical-panel-card) : schéma unifilaire SVG avec **troncs de phases** L1/L2/L3 (couleurs marron / noir / gris), ligne **Total** et têtes de phases avec leur puissance, **boîtes d'identifiant** (`id`) suivies du libellé, **pastilles de puissance alignées à droite** avec jauge de saturation (`max_w`, sinon calibre × 230 V ; rouge au-delà de 100 %), circuits rattachés au bus de leur différentiel, et **zones** avec pastille d'étage colorée. Un clic sur un nœud ouvre la fiche détaillée, un clic sur le total / une phase / une zone ouvre son capteur. **Repli** : chaque tableau (titre aligné sur les rangées), chaque rangée (différentiel) et chaque circuit possédant des zones a un chevron cliquable. Les boutons « Tout déplier » et « Replier un niveau » (zones, puis rangées, puis tableaux) agissent sur toute la carte.

```yaml
view: tree        # vue initiale : panel (défaut) | tree (schéma)
max_width: 1100   # px, défaut 700 : au-delà, le schéma s'élargit (plus de place pour les libellés) au lieu de grossir
collapsed: zones  # repli initial : none (défaut) | zones | rows | panels
floors:           # couleurs des pastilles d'étage
  RDC: { bg: '#38a169', fg: white }
```
Le dernier mode choisi est mémorisé par navigateur. Les deux vues partagent la même configuration. Variables CSS : `--din-panel-phase-l1-color`, `-l2-`, `-l3-`.

### Largeur du tableau (modules par rangée)

`modules_per_row` fixe la capacité d'une rangée en modules DIN (un coffret réel : 13, 18, 24…). Le rail et le coffret font alors exactement `N × module_width` px de large. Si une rangée contient plus de N modules DIN (somme des `width`), elle continue sur un **rail supplémentaire** ; un module plus large que N occupe seul son rail. La valeur peut être surchargée par tableau (`panels[].modules_per_row`). Sans valeur, la largeur reste automatique. Sur petit écran la rangée défile horizontalement, sans déformer les appareils.

### Rendu
- Un différentiel protège les modules qui le suivent dans la rangée, jusqu'au prochain différentiel.
- LED de charge : verte < 60 %, orange < 90 %, rouge ≥ 90 %.
- Petits écrans : chaque rangée défile horizontalement, les proportions ne sont jamais déformées.
- Thèmes clair/sombre suivis automatiquement.

## Migration depuis `groups` / `circuits`

L'ancien format **continue de fonctionner tel quel** (converti en interne). Pour migrer :

1. `npm install && npm run migrate -- ancien.yaml > nouveau.yaml` (ou, dans l'éditeur visuel, bouton **Convertir**) ;
2. ou migrer progressivement : garder `groups:` et référencer ses éléments depuis `panels` avec `circuit: '1-3'` ou `group: R1` (les champs du module écrasent ceux de la référence).

Correspondances : chaque `group` → une **rangée** (`id`, `label`, `phases`, `accent`) + un module `differential` (`amp`, `mA`, `poles`, `class`, `sensor`, `max_w`) ; chaque `circuit` → un module `breaker` ; **`type: power|socket|light` devient `usage`** (car `type` désigne maintenant l'appareil) ; `zones`, `sensor`, `icon`, `label`, `amp`, `id` sont inchangés ; `sensors` (total/phases) et `language` sont inchangés. Sur un groupe triphasé, les circuits sans `poles` deviennent tripolaires (3). Voir [`examples/migrated.yaml`](examples/migrated.yaml), généré à partir de ta configuration actuelle.

## Versions

Chaque nouvelle version incrémente `version` dans `package.json` ; elle est affichée dans la console du navigateur au chargement. Voir [CHANGELOG.md](CHANGELOG.md). Version actuelle : **1.7.0**.

## Développement

```bash
npm install
npm run build     # typecheck + bundle minifié -> dist/din-panel-card.js (la version vient de package.json)
npm test          # normalisation / migration (aucune donnée perdue)
npm run smoke     # rendu dans jsdom
```
Structure : `src/config.ts` (normalisation, migration), `src/components/` (panel, row, module, détails, `modules/faces.ts` = rendu de chaque type), `src/editor.ts` (éditeur visuel), `src/styles.ts`, `src/utils/`.
