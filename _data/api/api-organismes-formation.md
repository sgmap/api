---
title: API Organismes de Formation
tagline: Récupérez la liste publique des organismes de formation
producer: ministere-travail
is_open: 1
themes:
  - Emploi
  - Education
  - Formation
keywords:
  - Organisme
  - formation
  - CPF
  - compte
  - personnel
  - opco
  - opca
  - dgefp
contact_link: misi.dgefp@emploi.gouv.fr
doc_tech_link: /
doc_tech_external: /
last_update: 07/07/2021
visits_2019: 1000
dataset_uuid:
  - 582c8978c751df788ec0bb7e
---

Récupérez la liste publique des organismes de formation, centralisées et publiées par la délégation générale à l’emploi et à la formation professionnelle (DGEFP) et le Ministère du Travail.

La liste des organismes rendue publique concerne les organismes déclarés dans les conditions fixées par [l'article L.6351-7-1 du Code du Travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000021343604/), et à jour de leur obligation de transmettre le bilan pédagogique et financier mentionné à l'article L. 6352-11.

Elle comporte les renseignements relatifs à la raison sociale de l'organisme, à ses effectifs, à la description des actions de formation dispensées et au nombre de salariés et de personnes formées.

### À quoi sert cette API ?

Grâce à cette API vous pouvez :

- Vérifier qu’un organisme de formation est bien à jour de ses obligations légales
- Obtenir les informations clés d'un organisme de formation (Siren, adresse, spécialisation)

### Données disponibles

Pour chaque organisme de formation, retrouvez :

| Nom               | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| nom               | Nom de l'organisme de formation                                            |
| siren             | Siren de l'organisme de formation                                          |
| numeroDa          | Numéro de déclaration d'activité                                           |
| cfa               | L'organisme de formation est-il un CFA (Centre de Formation d'Apprentis) ? |
| adresse           | Voie, Code Postal, Ville, Pays de l'organisme de formation                 |
| codeSpecialite    | Code spécialité                                                            |
| libelleSpecialite | Libellé de la spécialité                                                   |

### D'où viennent les données

Les informations publiées proviennent des déclarations effectuées par les organismes de formation :

- Pour les nouveaux organismes de formation, il s’agit de la déclaration d’activité des organismes de formation.

- Pour les organismes déclarés et soumis à la transmission d’un bilan pédagogique et financier, elles proviennent de ce document.
