# Angular MicroFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server for Root app container

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Adding "Angular Elements" to the project
`ng add @angular/elements`

## Create "Project" inside the root app
To generate `header-app` application inside a folder as a project

`ng generate application <name>`

## Creating "Custom Element"

In order to make `header-app` as a customer element we need to import `Injector` from the `@angular/core` package and `createCustomElement` from the `@angular/elements` package:
```
File: app.module.ts
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
```

```
File: app.module.ts
export class AppModule {
  constructor(private injector: Injector){}
  
  ngDoBootstrap() {
    const headerApp = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('header-app', headerApp);
  }
}
```
```
File: index.html
<header-app></header-app>
<base href="./">
```

## Creating a Angular Web Component with Ngx-build-plus
Use ngx-build-plus to compile Angular Elements

```
ng add ngx-build-plus

Note: That will change 
      from => "builder": "@angular-devkit/build-angular:browser"
      to => "builder": "ngx-build-plus:browser"

      And will add "ngx-build-plus": "^11.0.0", as a dependencies
```

Adds webcomponent polyfills to your app
```
ng g ngx-build-plus:wc-polyfill
or 
ng g ngx-build-plus:wc-polyfill --project myProject

Note: That will change 
      from => "scripts": []
      to => "scripts": [
              {
                "bundleName": "polyfill-webcomp-es5",
                "input": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
              },
              {
                "bundleName": "polyfill-webcomp",
                "input": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js"
              }
            ]

      And will add "@webcomponents/webcomponentsjs": "^2.5.0", as a dependencies
```

Execute the externals: Updates your app to use webpack externals
```
ng g ngx-build-plus:externals
or 
ng g ngx-build-plus:externals --project myProject
```



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
