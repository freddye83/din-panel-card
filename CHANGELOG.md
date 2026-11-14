# Changelog

Chaque nouvelle version incrémente le numéro dans `package.json` (injecté dans le bundle et affiché dans la console du navigateur).

## 1.22.0
- Vue schéma : seul un différentiel est tête de groupe ; un disjoncteur en début de rangée n'en est plus une (revient sur 1.20.0). Une rangée sans différentiel = ligne [id rangée] portant tous ses modules, disjoncteurs compris.
- Vue tableau : dans une rangée mixte (phases différentes selon les modules), un repère de phase (L1 / L2 / L3, ou L1 L2 L3 pour un tri) est affiché au-dessus de chaque module.

## 1.21.0
- Vue schéma : une rangée sans différentiel ni disjoncteur de tête (≥ 2 modules) devient une ligne nommée par l'id (et le libellé) de la rangée, avec tous ses modules dessous (tri ou mono). La ligne se raccorde aux phases des modules tri (sinon à l'union) ; les modules à phases différentes (mono dans une ligne tri) montrent leur raccordement aux troncs seulement une fois la ligne dépliée. Repli/dépli et recherche pris en charge.

## 1.20.0
- Vue schéma : une rangée qui commence par un simple disjoncteur (sans zones) suivi d'autres modules regroupe ces modules sous lui (ligne « [id] libellé rangée - libellé »), comme pour un différentiel, au lieu de les laisser accrochés séparément aux troncs.
- Vue tableau : un parafoudre triphasé (3 phases, ou 3 pôles) affiche 3 carrés verts (rouges en défaut) repérés L1/L2/L3 ; une barre unique pour un parafoudre monophasé.

## 1.19.0
- Recherche en vue schéma : seuls les nœuds trouvés sont dépliés (tableau, différentiel, zones), le reste est replié ; les zones non concernées par la requête sont estompées.

## 1.18.0
- Champ de recherche multi-champ dans la barre d'outils (option `search`, activée par défaut) : id, libellé, type, calibre, étage/pièce, rangée/tableau, entités ; mots combinés en ET, `-mot` pour exclure ; accents et casse ignorés. Vue tableau : modules non trouvés estompés, trouvés cerclés, rangées sans résultat repliées ; vue schéma : lignes estompées et tout déplié. Compteur de résultats, `Entrée` = résultat suivant, `Échap` = effacer. Tests ajoutés (22 tests).

## 1.17.6
- Vue tableau : suppression de la barre bleue (peigne) au-dessus des modules.

## 1.17.5
- Documentation : capture « relais / alimentation » du README recadrée.

## 1.17.4
- Vue tableau : une vis par pôle en haut et en bas (un différentiel 4 pôles n'en a plus 8), repère N seulement s'il y a un neutre (absent sur un 3 pôles).

## 1.17.3
- Documentation : la « version actuelle » du README (EN + FR) était restée à 1.16.4 ; alignée sur `package.json`.

## 1.17.2
- Correctif : l'icône par défaut du relais (`mdi:relay`) n'existe pas dans MDI et s'affichait vide ; remplacée par `mdi:electric-switch`. Captures du README régénérées.

## 1.17.1
- Documentation : captures d'écran du README régénérées avec le nouveau look (données anonymisées).

## 1.17.0
- Vue tableau en style « schéma d'installation » : modules blancs à bornes carrées, manette noire bombée avec repère rouge « I On », bande bleutée du capot, vis rondes à tête fendue avec repère N, calibre à filets rouges, liseré noir entre appareils, peigne d'alimentation bleu, rail DIN visible en bout de rangée, légende sous chaque module (pictogramme encadré, libellé horizontal, section en rouge).
- Disjoncteurs : l'identifiant s'affiche dans la bande bleutée au-dessus de la manette (toujours visible, même avec un capteur) ; la mesure reste sous le calibre.
- Tous les types d'appareils adoptent le même gabarit : identifiant dans la bande bleue, bloc noir central (bouton-poussoir du télérupteur, bobine A1/A2 + voyant du relais, indicateur du contacteur, sélecteur I/A/O du jour/nuit, potentiomètre + DC OK de l'alimentation, fenêtre du parafoudre, afficheur du compteur), cadre de calibre/repère dessous ; obturateur gris pour les emplacements libres. Le liseré d'état (vert/rouge) est conservé.
- Nouveau champ de module `section` (mm², texte ou nombre) : affiché en rouge sous le libellé (éditeur visuel + README).
- Les icônes passent sous les modules (plus de bandeau vertical).

## 1.16.4
- Documentation : README en anglais (version française en fin de page), référence de configuration détaillée champ par champ (tableaux), section de migration `groups`/`circuits` retirée.

## 1.16.3
- Vue schéma : le cadre du titre de tableau tient compte de l'espacement des lettres (le texte débordait avec certaines polices).
- Captures du README régénérées avec une configuration fictive (anonymisées).

## 1.16.2
- README : retrait d'un chemin de ressource non vérifié (YAML) ; on renvoie à la ligne affichée par le Marketplace.

## 1.16.1
- Documentation : captures d'écran dans le README (`docs/`) ; installation via le Marketplace de Home Assistant 2026.11 (HACS intégré), HACS et installation manuelle conservés.

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
