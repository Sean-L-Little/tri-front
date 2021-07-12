# TriFront

Pour le front du webapp de tri, j'ai choisi Angular, c'est la framework que je connais le plus pour le front. J'aime beaucoup d'intégration de TS et la facilité d'usage des components Material UI.

Il suffit de rentrer les 5 chiffres que l'on souhaite trier, des entiers ou bien des décimaux et de choisir l'ordre de tri avant de cliquer sur le bouton pour trier. Pour voir les Listes Triées anciennes, on peut se naviguer vers l'onglet "Historique" où l'on trouve une table regroupant toutes les anciennes listes.

Afin d'éviter les problèmes avec les accents, j'en ai pas mis pour le mot "décroissant" partout dans le code.

Le Front envois la liste sous forme d'un objet avec 2 champs:
- ```'ordre' : string``` Qui peut avoir la valeur "croissant" ou "decroissant"
- ```'liste' : Array<number>``` La liste des entiers sous forme d'un array.

Cet objet est JSONifié et envoyé sur l'api.

La réponse de la requête POST est un JSON avec l'objet de la liste triée, c'est la même chose que l'objet envoyé mais il y a également l'ID et la liste est maintenant triée dans l'ordre souhaité.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
