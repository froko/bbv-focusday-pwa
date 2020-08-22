# CompanionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). Also check out [@froko/ng-essentials](https://www.npmjs.com/package/@froko/ng-essentials).

## Steps to reproduce

Here are the commands and tweaks used to create the application

1. Create a new application

   `ng new companion-app --prefix=bbv --routing=false --style=css`

2. Add [@froko/ng-essentials](https://www.npmjs.com/package/@froko/ng-essentials)

   `ng add @froko/ng-essentials`

3. Add [@angular/material](https://material.angular.io/)

   `ng add @angular/material`

   (Style [Indigo/Pink] | Typography [Yes] | Browser Animations [Yes])

4. Add [@angular/flex-layout](https://github.com/angular/flex-layout/#angular-flex-layout)

   `npm install @angular/flex-layout -s`

5. Add Board component

   `ng generate component board --module app`

6. Add Content feature module

   `ng generate module content`

   `ng generate component content`

   `ng generate component content/list`

   `ng generate service content/content`
