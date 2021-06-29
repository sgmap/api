---
title: API Accessibilité des Établissements Recevant du Public (ERP) - Accès Libre
tagline: Obtenez les informations d’accessibilité d’un ERP en France
is_open: 1 # 1 means API is fully open
partners:
producer: mtes
keywords:
  - accessibilite
  - ERP
  - public
  - handicap
monitoring_link: https://updown.io/9wqh
themes:
  - Géographie
  - Inclusion
content_intro: |
  L’API permet d'obtenir des informations sur l'accessibilité des Établissements Recevant du Public (ERP) en France.

  ### A quoi sert l'API accessibilité des ERP ?

  En intégrant l'API dans votre système d'information, vous pouvez notamment rechercher les informations d’accessibilité sur n’importe quel Établissements Recevant du Public (ERP) en France.
contact_link: acceslibre@beta.gouv.fr
doc_tech_link: https://acceslibre.beta.gouv.fr/api/openapi?format=openapi-json
doc_tech_external: https://acceslibre.beta.gouv.fr/api/docs/
visits_2019: 16602
last_update: 23/02/2021
---

### Données disponibles

#### Infos administratives et générales sur l’ERP

| Nom           | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| nom           | Raison sociale/Nom de l’établissement                       |
| activite      | Domaine d’activité                                          |
| slug          | identifiant unique                                          |
| adresse       | Adresse physique                                            |
| commune       | Nom de la commune d’implantation                            |
| code_insee    | Code INSEE de la commune d’implantation                     |
| geom          | Coordonnées géographique au format GeoJSON                  |
| siret         | Numéro SIRET (si disponible)                                |
| telephone     | Numéro de téléphone (si disponible)                         |
| site_internet | Site internet de l’ERP (si disponible)                      |
| contact_email | Contact email (si disponible)                               |
| user_type     | Type de contributeur (gestionnaire, usager, administration) |

#### Infos d’accessibilité de l'ERP

Un endpoint dédié permet d'accéder à [la description des champs](https://acceslibre.beta.gouv.fr/api/accessibilite/help/), en voici une synthèse :

`transport_station_presence` → **Proximité d'un arrêt de transport en commun.**
Existe-t-il un arrêt de transport en commun à proximité (moins de 200 mètres)&nbsp;?

`transport_information` → **Informations complémentaires.**
Préciser ici les informations supplémentaires sur ces transports (type de transport, ligne, nom de l'arrêt, etc) et éventuellement des informations jugées importantes sur le cheminement qui relie le point d'arrêt à l'établissement.

`stationnement_presence` → **Stationnement dans l'ERP.**
Existe-t-il une ou plusieurs places de stationnement dans l’établissement ou au sein de la parcelle de l’établissement&nbsp;?

`stationnement_pmr` → **Stationnements adaptés dans l'ERP.**
Existe-t-il une ou plusieurs places de stationnement adaptées dans l’établissement ou au sein de la parcelle de l'établissement&nbsp;?

`stationnement_ext_presence` → **Stationnement à proximité de l'ERP.**
Existe-t-il une ou plusieurs places de stationnement en voirie ou en parking à proximité de l'établissement (200 m)&nbsp;?

`stationnement_ext_pmr` → **Stationnements PMR à proximité de l'ERP.**
Existe-t-il une ou plusieurs places de stationnement adaptées en voirie ou en parking à proximité de l’établissement (200 m)&nbsp;?

`cheminement_ext_presence` → **Cheminement extérieur.**
L'accès à l'entrée depuis la voirie se fait-il par un cheminement extérieur&nbsp;?

`cheminement_ext_terrain_accidente` → **Revêtement extérieur.**
Le revêtement du cheminement extérieur (entre l’entrée de la parcelle et l’entrée de l’établissement) est-il meuble ou accidenté (pavés, gravillons, terre, herbe, ou toute surface non stabilisée)&nbsp;?

`cheminement_ext_plain_pied` → **Cheminement extérieur de plain-pied.**
Le cheminement est-il de plain-pied, c’est-à-dire sans marche ni ressaut supérieur à 2 cm&nbsp;? Attention plain-pied ne signifie pas plat mais sans rupture brutale de niveau.

`cheminement_ext_ascenseur` → **Ascenseur/élévateur.**
Existe-t-il un ascenseur ou un élévateur&nbsp;?

`cheminement_ext_nombre_marches` → **Nombre de marches.**
Indiquer 0 s'il n'y a ni marche ni escalier

`cheminement_ext_reperage_marches` → **Marches ou escalier sécurisé(es).**
L'escalier est-il sécurisé&nbsp;: nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier, première et dernière contremarches contrastées&nbsp;?

`cheminement_ext_main_courante` → **Main courante.**
L'escalier est-il équipé d'une main courante&nbsp;?

`cheminement_ext_rampe` → **Rampe.**
S'il existe une rampe, est-elle fixe ou amovible&nbsp;?

`cheminement_ext_pente` → **Pente.**
S'il existe une pente, quel est son degré de difficulté&nbsp;?

`cheminement_ext_devers` → **Dévers.**
Un dévers est une inclinaison transversale du cheminement. S'il en existe un, quel est son degré de difficulté&nbsp;?

`cheminement_ext_bande_guidage` → **Bande de guidage.**
Présence d'une bande de guidage au sol facilitant le déplacement d'une personne aveugle ou malvoyante

`cheminement_ext_retrecissement` → **Rétrécissement du cheminement.**
Existe-t-il un ou plusieurs rétrécissements (inférieur à 80 cm) du chemin emprunté par le public pour atteindre l'entrée&nbsp;?

`entree_reperage` → **Entrée facilement repérable.**
Y a-t-il des éléments facilitant le repérage de l'entrée de l’établissement (numéro de rue à proximité, enseigne, végétaux, éléments architecturaux contrastés, etc)&nbsp;?

`entree_vitree` → **Entrée vitrée.**
La porte d'entrée est-elle vitrée&nbsp;?

`entree_vitree_vitrophanie` → **Repérage de la vitre.**
Y a-t-il des éléments contrastés (autocollants ou autres) permettant de repérer la porte vitrée&nbsp;?

`entree_plain_pied` → **Entrée de plain-pied.**
L'entrée est-elle de plain-pied, c’est-à-dire sans marche ni ressaut supérieur à 2 cm&nbsp;?

`entree_ascenseur` → **Ascenseur/élévateur.**
Existe-t-il un ascenseur ou un élévateur&nbsp;?

`entree_marches` → **Nombre de marches.**
Indiquer 0 s'il n'y a ni marche ni escalier

`entree_marches_reperage` → **Repérage des marches.**
L'escalier est-il sécurisé&nbsp;: nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier, première et dernière contremarches contrastées&nbsp;?

`entree_marches_main_courante` → **Main courante.**
L'escalier est-il équipé d'une main courante&nbsp;?

`entree_marches_rampe` → **Rampe.**
S'il existe une rampe, est-elle fixe ou amovible&nbsp;?

`entree_dispositif_appel` → **Dispositif d'appel à l'entrée.**
Existe-t-il un dispositif comme une sonnette pour permettre à quelqu'un ayant besoin de la rampe ou d'une aide humaine de signaler sa présence&nbsp;?

`entree_balise_sonore` → **Balise sonore à l'entrée.**
L'entrée est-elle équipée d'une balise sonore facilitant son repérage par une personne aveugle ou malvoyante&nbsp;?

`entree_aide_humaine` → **Aide humaine.**
Présence ou possibilité d'une aide humaine au déplacement

`entree_largeur_mini` → **Largeur de la porte.**
Si la largeur n'est pas précisément connue, indiquer une valeur minimum. Exemple&nbsp;: la largeur se situe entre 90 et 100 cm&nbsp;; indiquer 90.

`entree_pmr` → **Entrée spécifique PMR.**
Existe-t-il une entrée secondaire spécifique dédiée aux personnes à mobilité réduite&nbsp;?

`entree_pmr_informations` → **Informations complémentaires concernant l'entrée PMR.**
Préciser ici les modalités d'accès de l'entrée spécifique PMR

`accueil_visibilite` → **Visibilité de la zone d'accueil.**
La zone d'accueil (guichet d’accueil, caisse, secrétariat, etc) est-elle visible depuis l'entrée&nbsp;?

`accueil_personnels` → **Personnel d'accueil.**
En cas de présence du personnel, est-il formé ou sensibilisé à l'accueil des personnes handicapées&nbsp;?

`accueil_equipements_malentendants_presence` → **Présence d'équipements d'aide à l'audition et à la communication.**
L'accueil est-il équipé de produits ou prestations dédiés aux personnes sourdes ou malentendantes&nbsp?

`accueil_equipements_malentendants` → **Liste des équipements d'aide à .l'audition et à la communication.**
Sélectionnez les équipements ou prestations disponibles à l'accueil de l'établissement&nbsp;:

`accueil_cheminement_plain_pied` → **Cheminement de plain-pied entre l'entrée et l'accueil.**
Le cheminement est-il de plain-pied, c’est-à-dire sans marche ni ressaut supérieur à 2 cm&nbsp;? Attention, plain-pied ne signifie pas plat mais sans rupture brutale de niveau.

`accueil_cheminement_ascenseur` → **Ascenseur/élévateur.**
Existe-t-il un ascenseur ou un élévateur&nbsp;?

`accueil_cheminement_nombre_marches` → **Nombre de marches.**
Indiquer 0 s'il n'y a ni marche ni escalier

`accueil_cheminement_reperage_marches` → **Repérage des marches ou de l’escalier.**
L'escalier est-il sécurisé&nbsp;: nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier, première et dernière contremarches contrastées&nbsp;?

`accueil_cheminement_main_courante` → **Main courante.**
L'escalier est-il équipé d'une main courante&nbsp;?

`accueil_cheminement_rampe` → **Rampe.**
S'il existe une rampe, est-elle fixe ou amovible&nbsp;?

`accueil_retrecissement` → **Rétrécissement du cheminement.**
Existe-t-il un ou plusieurs rétrécissements (inférieur à 80 cm) du chemin emprunté par le public pour atteindre la zone d’accueil&nbsp;?

`accueil_prestations` → **Prestations spécifiques proposées par l'établissement.**
Prestations spécifiques supplémentaires proposées par l'établissement

`sanitaires_presence` → **Sanitaires.**
Y a-t-il des sanitaires mis à disposition du public&nbsp;?

`sanitaires_adaptes` → **Sanitaires adaptés.**
Y a-t-il des sanitaires adaptés mis à disposition du public&nbsp;?

`labels` → **Marques ou labels.**
Si l’établissement est entré dans une démarche volontaire de labellisation liée au handicap, quelle marques ou quels labels a-t-il obtenu&nbsp;?

`labels_familles_handicap` → **Famille(s) de handicap concernées(s).**
Quelle(s) famille(s) de handicap sont couvertes par ces marques et labels&nbsp;?

`labels_autre` → **Autre label.**
Si autre, préciser le nom du label

`registre_url` → **Registre.**
Si l'établissement en dispose, adresse internet (URL) à laquelle le registre d'accessibilité de l'établissement est consultable.

`conformite` → **Conformité.**
L'établissement est-il déclaré conforme ? (réservé à l'administration)

`commentaire` → **Commentaire libre (précisions utiles concernant l'accessibilité du bâtiment)**
Indiquez ici toute information supplémentaire qui vous semble pertinente pour décrire l'accessibilité du bâtiment.
