---
title: API Découpage Administratif - (API Geo)
tagline: Interrogez les référentiels géographiques plus facilement
is_open: 1 # 1 means API is fully open
external_site: https://geo.api.gouv.fr
partners:
  - Etalab
  - INSEE
  - OpenStreetMap
producer: dinum
keywords:
  - Communes
  - Codes postaux
  - Départements
  - Régions
  - EPCI
rate_limiting_resume: 50 appels / seconde / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 50 appels par seconde et par adresse IP.
themes:
  - Géographie
content_intro: |
  L' **API Découpage Administratif** fait partie de la boîte-à-outils API Géo. Elle permet d'interroger facilement les référentiels géographique nationaux.

  ### A quoi sert l'API Découpage Administratif ?

  En intégrant l'API dans votre système d'information, vous pouvez notamment :

  - rechercher une communes par nom, code postal ou coordonnées géographiques
  - rechercher un département par son nom
  - rechercher une région par son nom
contact_link: geo@api.gouv.fr
doc_tech_link: https://geo.api.gouv.fr/definition.yml
doc_tech_external: https://geo.api.gouv.fr/decoupage-administratif
uptime: 100 # https://uptimerobot.com/dashboard#777757460
visits_2019: 26602
last_update: 17/01/2020
---

### Données disponibles

| Nom         | Description                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Commune     | Le nom, la population, le code INSEE, le code postal, la géolocalisation (latitude, longitude) et le contour (GeoJSON) |
| Département | Le nom, le code INSEE du département, et la région de rattachement                                                     |
| Région      | La liste des régions et leur code INSEE                                                                                |

### Couverture du territoire

France métropolitaine et [DROM](https://fr.wikipedia.org/wiki/D%C3%A9partement_et_r%C3%A9gion_d%27outre-mer).

### Coordonnées géographiques

Cette API utilise exclusivement des coordonnées géographiques [WGS-84](https://fr.wikipedia.org/wiki/WGS_84).
Elle peut renvoyer des données au format JSON ou [GeoJSON](http://geojson.org).

### Données source

[Toutes les données utilisées](https://github.com/etalab/api-communes#données-sources) sont sous licences Open Data.
