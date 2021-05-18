---
title:  News on the RGAA v4
nav: menu-techniques
---

# News on the RGAA v4

## Images

### Critère 1.2 Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?

* L'attribut alt sur la balise `<img>` n'est plus obligatoire, Dans ce cas il est nécessaire d'utiliser `aria-hidden="true"` ou `role="presentation"`.
* Pour chaque image porteuse d’information et ayant une alternative textuelle, l’alternative textuelle est-elle courte et concise (hors cas particuliers) ?

## Couleurs

### Critère 3.2. Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?

* Text sans effet de graisse inférieur à 24px - 4.5:1 au moins
* Text sans effet de graisse supérieur ou égale à 24px - 3:1 au moins
* Text en gras (bold, black) inférieur à 18.5px - 4.5:1 au moins
* Text en gras (bold, black) supérieur ou égale 18.5px - 3:1 au moins

### Critère 3.3 Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées (hors cas particulier s ) ?

* Le rapport de contraste est de 3:1, au moins.

## Tableaux

### Critère 5.4. Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?
Le titre d'un tableau peut être :
* Dans la balise `<caption>` ;
* Dans l'attibut `title` ;
* Dans un attribut `aria-label` ;
* Dans une balise associée au tableau de données via un attribut WAI-ARIA aria-labelledby sur le tableau.

Note : seule la balise <caption> étant complètement supportée par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en œuvre afin d’éviter de nombreuses vérifications dans les différentes combinaisons prévues par l’environnement de test (ou « base de référence »).

## Liens

### Fusion de 6.2 et 6.4.
Note 5 : bien que le calcul du nom accessible d’un lien tienne compte de contenus texte générés en CSS via les pseudo-éléments ::before et ::after, cette pratique ne doit pas être utilisée car elle constitue une non conformité au critère 1.3.1 des WCAG 2.1 (cf. F87).

## Scripts

### Critère 7.5 Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?

## Structuration de l'information

### Critère 9.2. Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?
La balise <main> peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut hidden ou d’un style permettant de les masquer aux technologies d’assistances. A noter cependant que l’utilisation d’un style seul restera insuffisant pour assurer l’unicité d’une balise <main> visible en cas de désactivation des feuilles de styles.

## Présentation de l'information

### Critère 10.4. Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu’à 200%, au moins (hors cas particuliers) ?
Zoom graphique autorisé

### Critère 10.11. Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à la fois à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou une largeur de 320px (hors cas particuliers) ?
Nouveau critère

Pas de scroll bar horizontale sur un affichage à 320px;

### Critère 10.12. Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?
Nouveau critère

### Critère 10.13. Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un composant d’interface sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?
Nouveau critère

### Critère 10.14. Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?
Nouveau critère

## Formulaires

### Critère 11.5. Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?
Nouvelle condition<br>
Les champs de même nature de type radio ( ou balises possédant un attribut WAI-ARIA role=”radio”) sont regroupés dans une balise possédant un attribut WAI-ARIA role=”radiogroup” ou “group”.

### Critère 11.11. Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?
Certains types de contrôles en HTML5 proposent des messages d’aide à la saisie automatique : par exemple le type email affiche un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l’adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l’API Constraint Validation, ce qui permet de personnaliser les messages d’erreur et de valider le critère. L’attribut pattern permet d’effectuer automatiquement des contrôles de format (via des expressions régulières) et affiche un message d’aide personnalisable via l’attribut title : ce dispositif valide également le critère.

Référence : [HTML 5.2 - 4.10.20.3 The constraint validation API](https://www.w3.org/TR/html52/sec-forms.html#the-constraint-validation-api).

### Critère 11.13. La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?
Utilisation de l'attribut autocomplete

## Navigation

### Critère 12.10. Dans chaque page web, les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?
Nouveau critère

### Critère 12.11. Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?
Nouveau critère

## Consultation

* Le poids et le format de fichiers ne sont plus obligatoires

### Critère 13.9. Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portait ou paysage) (hors cas particuliers) ?
Nouveau critère

### Critère 13.10. Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un geste complexe peuvent-elles être également disponibles au moyen d’un geste simple (hors cas particuliers) ?
Nouveau critère

### Critère 13.11. Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?
Nouveau critère

### Critère 13.12. Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?
Nouveau critère.<br>
Prévoir des alternatives dans l'interface pour les action par mouvement.
