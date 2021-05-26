---
title: API Pro Santé Connect
tagline: Authentifier les professionnels de la santé à partir du Répertoire Partagé des Professionnels de Santé (RPPS)
external_site: https://esante.gouv.fr/
is_open: -1 # -1 means API not open
#datapass_link:
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les éditeurs de logiciels sont habilitées à utiliser l'API Pro Santé Connect ou intégrer le bouton Pro Santé Connect.

      Si vous cherchez à contacter l'équipe Pro Santé Connect, vous pouvez [contacter l'Agence Numérique en Santé](mailto:prosanteconnect.editeurs@esante.gouv.fr)

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seuls les éditeurs de logiciels français proposant une solution web adressée aux professionnels de santé peuvent demander à se raccorder à Pro Santé Connect.

      <NextSteps />
      <Button href="mailto:prosanteconnect.editeurs@esante.gouv.fr">Remplir une demande</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Vous pouvez réaliser une demande d'accès à l'API.

      <NextSteps />
      <Button href="mailto:prosanteconnect.editeurs@esante.gouv.fr">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciels
    is_eligible: 0
    description: |
      Tout éditeur français proposant une solution web adressée aux professionnels de santé et qui souhaite pouvoir authentifier des professionnels de santé peut demander à se raccorder à Pro Santé Connect.

      <NextSteps />
      <Button href="mailto:prosanteconnect.editeurs@esante.gouv.fr">Remplir une demande</Button>
partners:
  - Ministère des Solidarités et de la Santé (MSS)
producer: ans
keywords:
  - Authentification
  - Identification
  - SSO
  - Santé
  - Professionnels
  - Editeurs
  - Connect
  - RPPS
  - adeli
  - idNat
themes:
  - Santé
uptime: 99.21
contact_link: prosanteconnect.editeurs@esante.gouv.fr
doc_tech_external: https://integrateurs-cps.asipsante.fr/pages/prosanteconnect/documentation-fs
last_update: 22/03/2021
---

L‘API Pro Santé Connect permet à des administrations, des éditeurs de logiciels ou des entreprises d’ajouter un bouton Pro Santé Connect, pour recueillir des données d’identité fiables et ainsi identifier les utilisateurs de leur service en ligne (en vue d’une entrée en relation ou connexion).

### À quoi sert cette API ?

Pro Santé Connect est un fournisseur d’identité (FI) au standard OpenID. Il accepte comme « credential » d’authentification la carte CPS et une e-carte CPS qui est une application ordiphone.

L’assertion d’authentification OpenIDConnect « remonte » au fournisseur de service (FS) demandeur de l’authentification les traits d’identités classiques plus l’identité sectorielle (profession, savoir-faire, situation d’exercice, …) afin que celui-ci puisse, au-delà de la simple authentification, gérer tout ou partie de son contrôle d’accès .

Ces éléments sont fournis par [notre annuaire](https://annuaire.sante.fr) et incorporé dans le jeton OpenIdConnect.
|

### Données disponibles dans l'API 


| Type                       | Données                                                  |
| -------------------------- | -------------------------------------------------------- |
| Identifiant national       | Adeli ou RPPS                                            |
| Données sectorielles       | type d'activité (salarié ou libéral) et lieu d'activité. |
