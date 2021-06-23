---
title: API SI Amiante
tagline: Connecter une solution logicielle au système d'information national SI-Amiante
external_site: https://solidarites-sante.gouv.fr/sante-et-environnement/batiments/SI-amiante
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et certains éditeurs de logiciels peuvent utiliser cette API.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une préfecture ou une administration, vous pouvez utiliser cette API pour récupérer les rapports d'actvités et rapports d'alerte émis par les diagnostiqueurs et les laboratoires accrédités.

      <Button href="mailto:si-amiante@sante.gouv.fr">Demander un accès</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seuls les éditeurs de logiciels destinés aux diagnostiqueurs d'amiante et laboratoire accrédités peuvent utiliser l'API SI-Amiante.

      <Button href="mailto:si-amiante@sante.gouv.fr">Demander un accès</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Les éditeurs de logiciels qui s'adressent aux diagnostiqueurs d'amiante et aux laboratoires certifiés peuvent utiliser l'API SI-Amiante.

      <Button href="mailto:si-amiante@sante.gouv.fr">Demander un accès</Button>
producer: mss
keywords:
  - Amiante
  - Diagnostic
  - Mesure
  - Editeurs
contact_link: si-amiante@sante.gouv.fr
#doc_tech_external:
themes:
  - Santé
content_intro: |
  Par l'intermédiaire des éditeurs de logiciels, l'API SI-Amiante permet aux diagnostiqueurs d'amiante et aux laboratoires de transmettre aux autorités compétentes leurs rapports annuels et rapports d'alerte.

  ### A quoi sert l’API SI-Amiante ?

  Le SI-Amiante est une plateforme développée par la Direction générale de la Santé, permettant à des organismes concourant à la mise en œuvre du code de la santé publique en matière d’amiante - diagnostiqueurs certifiés et laboratoires accrédités – de transmettre aux services de l’État par voie électronique des rapports annuels d’activité et des rapports d’alerte.
visits_2019: 2000
doc_tech_link: /swaggers/api-si-amiante.yaml
last_update: 01/04/2021
---

### Données accessibles dans l'API

L'API SI-Amiante transmet les données suivantes :

| Donnée                       | Description                                    |
| ---------------------------- | ---------------------------------------------- |
| Référence du diagnostic      | Identifiant unique du diagnostic               |
| Présence d'amiante           | Détection de matériaux amiantés                |
| Niveau de mesure             | Proportion des matériaux amiantés, si détectés |
| Localisation de la détection | Murs, toiture, plafonds, sol...                |

### En savoir plus

Les organismes concourant à la mise en œuvre du Code de la Santé Publique en matière d’amiante (diagnostiqueurs certifiés et laboratoires accrédités) produisent des rapports annuels d’activité et des rapports de repérage, qu’ils doivent transmettre aux services de l’État (Direction générale de la Santé au sein du Ministère chargé de la santé, Direction de l’Habitat, de l’Urbanisme et des Paysages au sein du Ministère chargé du logement, préfectures).

Le recueil et l’exploitation de ces informations répondent à des enjeux en termes de santé publique mais également de perfectionnement et de valorisation pour toute une branche professionnelle dont le développement reste récent.
Il s’agit de rendre compte des actions de repérage, de connaître l’état du parc bâti, d’être alerté sur des situations à risques, et de conforter les procédures de contrôle et de suivi.

[Lire la page complète sur le site SI-Amiante](https://solidarites-sante.gouv.fr/sante-et-environnement/batiments/SI-amiante#Utilisateurs-du-SI-Amiante)
