---
title: AgentConnect
tagline: Identifier les agent des administration centrales sur votre site internet et accéder à certaines données d'identité certifiées
external_site: https://franceconnect.gouv.fr/partenaires
is_open: -1 # -1 means API not open
datapass_link: https://franceconnect.gouv.fr/partenaires
access_page:
  - who:
      - Un particulier
      - Une entreprise
      - Une collectivité territoriale
    is_eligible: -1
    description: |
      Seuls les administrations centrales, déconcentrées ou les opérateurs de l’Etat sont autorisés à accéder à l’API.

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une administration centrale
      - Une administration déconcentrée
      - Un opérateur de l'Etat
    is_eligible: 1
    description: |
      <NextSteps />
      <Button href="https://franceconnect.gouv.fr/partenaires">Remplir une demande</Button>
partners:
producer: dinum
keywords:
  - Authentification
  - Identification
  - Agent
  - Administration
  - SSO
themes:
  - Administration & législation
contact_link: support.partenaires@agentconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 4500
last_update: 10/12/2020
---

AgentConnect permet aux agents de la fonction publique d’Etat de se connecter aux applicatifs métiers web depuis un compte existant. Son objectif premier est de simplifier le quotidien des agents de l’Etat.

AgentConnect est à destination des administrations centrales, aux services déconcentrés et aux opérateurs de l’Etat.

Il ne s’adresse pas et aux collectivités territoriales et aux acteurs privés.

### A quoi ca sert ?

Intégrer le fédérateur d’identité AgentConnect, permet :

Pour les agents ;

- Utiliser un compte existant pour accéder à tous les applicatifs métiers qui utilisent AgentConnect
- Respecter les politiques de sécurité en matière de mot de passe

Pour les administrations,

- Simplifier l’accès aux applications internes et inter-ministérielles pour les agents
- Récupérer les informations nécessaires et permettre le contrôle d’accès
- Renforcer la sécurité des accès et des moyens d’authentification

### Les données disponibles via l'API

L'API AgentConnect récupère auprès des fournisseurs d’identités des données qui permettront aux fournisseurs de services d’authentifier les agents et leur ouvrir l’accès aux applications.

On distingue les données de l’identité pivot, il s’agit de données obligatoires que le fournisseur de données devra transmettre à AgentConnect.

| Nom                   | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| Nom                   | Nom d’usage                                                                          |
| Prénoms               | Prénom d’usage                                                                       |
| Identifiant technique | Identifiant technique unique qui est enregistré auprès du fournisseur d’identité     |
| Adresse mail          | Adresse de courrier électronique qui est enregistré auprès du fournisseur d’identité |

En plus de cette identité pivot, selon le cas d'usage et la capacité des fournisseurs d’identités à les transmettre, il sera possible d’accéder à des données complémentaires :

| Nom                                           | Description                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Siren                                         | Identifiant structure en 9 caractères                                                |
| Siret                                         | Identifiant structure en 14 caractères                                               |
| Ministère, Direction ou service d’affectation | Nom de l’organisation de rattachement (Ministère, Direction, Service)                |
| Adresse mail                                  | Adresse de courrier électronique qui est enregistré auprès du fournisseur d’identité |
| Population d’appartenance                     | Agent, prestataire, stagiaire                                                        |
| Téléphone                                     | Numéro de téléphone de contact                                                       |

La liste des données complémentaires n’est pas exhaustive et pourra être mise à jour en fonction des besoins.

### Comment ça marche ?

L‘API AgentConnect permet d’implémenter AgentConnect sur les services applicatifs métiers (fournisseurs de service) afin de leur permettre de déléguer la vérification de l’identité de l’agent à des fournisseurs d’identités.
Ces derniers transmettent des données d’identité à AgentConnect qui se chargera de renvoyer ces données au fournisseur de service pour qu’il puisse habiliter l’agent.

A noter, qu’AgentConnect transmettra au fournisseur de service uniquement les données demandées.

_Schéma de fonctionnement de AgentConnect :_
![Fonctionnement de AgentConnect](/images/divers/agentConnect.png)

**NB:** Pour en savoir plus, vous pouvez consulter la <External href="https://partenaires.franceconnect.gouv.fr/documentation">documentation partenaires</External>.
