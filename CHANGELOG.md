# Changelog

Chaque nouvelle version incrémente le numéro dans `package.json` (injecté dans le bundle et affiché dans la console du navigateur).

## 1.16.0
- Vue schéma : une zone sans `icon` affiche l'icône de son disjoncteur (icône du module, à défaut celle de son usage).
- Vue tableau : l'infobulle au survol d'un module est maintenant riche — icône du module devant le titre, et pour chaque zone son icône (à défaut celle du disjoncteur) devant « étage · pièce ». Clavier : visible au focus.

## 1.15.0
- Éditeur visuel réorganisé en sections repliables : **Général**, **Capteurs globaux** (total + L1/L2/L3), puis un bloc par **tableau**, tous repliés au départ (seul Général est ouvert). Le contenu de chaque section n'est créé qu'à l'ouverture.

## 1.14.6
- Éditeur visuel : les formulaires d'un module et de ses zones ne sont créés qu'à l'ouverture du module (avant : tous créés d'un coup, y compris repliés — plusieurs centaines de sélecteurs d'entités pour ~40 modules, d'où > 10 s d'attente).

## 1.14.5
- Vue schéma, ligne d'un différentiel (tous) : `[id du différentiel] libellé rangée - libellé différentiel` ; les libellés absents sont omis (aucun texte si aucun n'est renseigné).

## 1.14.4
- Vue schéma : avec un seul différentiel, la ligne représente la rangée : la boîte affiche l'id de la rangée (et non l'id du différentiel) et le texte son libellé s'il existe. Avec plusieurs différentiels, chacun garde sa boîte et son libellé.

## 1.14.3
- Vue schéma : quand une rangée contient plusieurs différentiels, chacun porte son propre libellé (à défaut celui de la rangée, puis son id). Avec un seul différentiel, c'est toujours le libellé de la rangée.

## 1.14.1
- Vue schéma : la ligne d'un groupe affiche le libellé de la rangée, à défaut son id, jamais le libellé du différentiel (porté par le premier différentiel de la rangée).

## 1.14.0
Corrections :
- Vue schéma : les circuits placés avant le premier différentiel (ou dans une rangée sans différentiel) sont reliés aux troncs de leurs phases (piquages) au lieu de « flotter ».
- Vue schéma : un clic sur Total / une phase ne disposant que d'un `voltage_sensor` ouvre bien ce capteur (plus de `moreInfo(undefined)`).
- Vue mémorisée : `view:` du YAML est prioritaire ; sinon la mémoire est propre à chaque carte (clé dérivée du titre et des tableaux) et non plus partagée par toutes les cartes du navigateur.
- Le changement de langue de Home Assistant redessine la carte.
- Éditeur : langue par défaut = langue de HA (comme la carte), plus `fr` forcé.
- Voyant d'un module : rouge clignotant au-delà de 100 % ; valeurs négatives bornées à 0.
- Migration : le différentiel d'un groupe triphasé passe à 4 pôles par défaut.
Améliorations :
- `modulePower` mis en cache par module et par état `hass` (le schéma l'appelait 3-4 fois par module).
- Tension nominale configurable `nominal_voltage` (défaut 230 V) pour la limite W déduite d'un calibre A.
- Vue schéma : zones cliquables et chevrons accessibles au clavier (Tab, Entrée / Espace) avec focus visible.
- Nouveau script `npm run regress` (jsdom, assertions) couvrant ces cas.

## 1.13.0
- Titre du cadre d'arrivée configurable : `incoming_title` (défaut « Arrivée »), champ dans l'éditeur.
- Vue schéma : l'icône d'une zone (`zones[].icon`) est affichée, après l'étage et avant la pièce.

## 1.12.0
- En-tête (vue tableau) : remplacement des tuiles par un cadre « Arrivée » dans le style des tableaux, de même largeur : ligne Total (sans jauge), puis L1 / L2 / L3 avec barre de jauge et valeurs (W, kWh, A, V) colorées par type.
- Vue schéma : la ligne Total n'a plus de jauge (pointillés) ; les phases gardent leur barre.

## 1.11.0
- Vue tableau : la valeur d'un capteur sur un module a une couleur selon son type — puissance (vert), consommation kWh (ambre), intensité (bleu), tension (violet). Mêmes couleurs sur les pastilles du schéma.
- En-tête (vue tableau) : le Total et L1/L2/L3 sont des tuiles à jauge en arc ; les autres mesures (A, V, kWh) en pastilles colorées dessous.
- En-tête (vue schéma) : une barre de jauge sobre relie le libellé Total / L1 / L2 / L3 aux valeurs. Limite = `max_w` ; à défaut, `max_w` total ÷ nombre de phases, sinon la phase la plus chargée.

## 1.10.0
- Vue tableau, modules : les kWh s'affichent avec une seule décimale (le « h » n'est plus tronqué) et le « ≥ » est supprimé.
- Libellés verticaux remontés d'un cran (marge intérieure).
- En-tête de rangée : calibre / sensibilité / classe retirés (déjà sur le différentiel).

## 1.9.0
- Lignes d'entrée (total / phases) : `entity` n'accepte que W ou kWh (une intensité y est ignorée, `current_sensor` est fait pour ça).
- Nouveau `voltage_sensor` sur le total et les phases, affiché à côté des autres valeurs (schéma, jauges, éditeur). À défaut, la tension est estimée par U ≈ P / I (affichée « ≈ ») si `entity` (W) et `current_sensor` (A) sont connus. Estimation fiable uniquement avec une puissance apparente (VA) ; en W actifs elle est sous-estimée par le facteur de puissance.

## 1.8.0
- Compteurs multiples : si une rangée / un différentiel mélange des capteurs W, kWh et A, une somme est affichée par type, côte à côte (vue tableau, vue schéma, en-tête de rangée, détails).
- `current_sensor` est maintenant affiché sur les modules ; avec `sensor`, les deux valeurs sont côte à côte.
- `sensors.total` et `sensors.phases.lN` acceptent `current_sensor` (affiché à côté de `entity`, schéma et jauges du tableau).
- Éditeur visuel : configuration du total et des phases L1/L2/L3 (puissance, intensité, max).
- Vue schéma : plus de pointillés lorsqu'il n'y a rien à afficher en face.

## 1.7.0
- Vue tableau : nombre de modules DIN maximum par rangée (`modules_per_row`, global ou par tableau). Le rail et le coffret ont alors une largeur fixe (N × largeur d'un module) ; au-delà de N modules, la rangée continue sur un rail supplémentaire. Sur petit écran, la rangée défile horizontalement.
- Vue tableau : l'identifiant n'est plus affiché sur les différentiels.

## 1.6.0
- Vue tableau : l'état du contacteur jour/nuit est bien visible (liseré du module, bandeau et sélecteur verts = enclenché / rouges = déclenché). Même liseré pour le contacteur de puissance, le relais et le télérupteur ; voyant du contacteur passé en vert, étiquette ON/OFF.
- Vue schéma : l'état (pastille ON/OFF et boîte d'identifiant verte / rouge) s'affiche pour tout module ayant un `state_entity` (relais, contacteurs, télérupteur…).

## 1.5.0
- Nouveaux modules : **relais** (`type: relay`, alias `relais`) et **alimentation** (`type: psu`, alias `alimentation`, champ `output` ex. « 24 V DC ») ; **télérupteur** (`type: impulse`, alias `telerupteur`) redessiné avec voyant et état ON/OFF. L'ancien alias `relay` désignait un télérupteur : il désigne maintenant le relais.
- État d'un relais / télérupteur / alimentation lu depuis `state_entity`, qui accepte un capteur (on/off, active/inactive, 0/1, valeur numérique > 0), un switch, un binary_sensor…
- Vue tableau : la mesure du capteur s'affiche au-dessus de l'identifiant.
- Vue tableau : un différentiel sans valeur (capteur absent ou indisponible) n'affiche plus de cadre noir vide.

## 1.4.0
- Vue schéma : icônes des circuits entièrement visibles (elles étaient coupées au tiers).
- Vue tableau : un disjoncteur 1 DIN sans `poles` est dessiné avec 2 pôles (phase + neutre), largeur inchangée.
- Vue tableau : le nombre de pôles (ex. « 4P ») n'est plus imprimé sur l'appareil.
- Vue tableau : au survol d'un module, liste des étages / pièces du circuit.
- Capteurs : puissance (W, kW), consommation (Wh, kWh) ou intensité (A, mA), détectés via l'unité (ou la `device_class`) ; sommes par type, jauge en A contre le calibre pour une intensité.
- Vue schéma, repli par tableau / rangée / zones ; titre du tableau aligné sur les rangées ; `max_width`, `collapsed`.

## 1.0.0 – 1.3.x
Carte initiale (vue tableau DIN), renommage `din-panel-card`, vue schéma unifilaire.
