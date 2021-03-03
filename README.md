# Angular MicroFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

# Angular Elements
Angular elements are Angular components packaged as **custom elements** (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way.
```ruby
ng add @angular/elements
```

### Step 1 - Create CLI project
Use CLI command to create new angular project as a wrapper.
```ruby
ng new <angular-mocrofrontend>
```

### Step 2 - Create Monorepo Project inside the root app
Use CLI command to create application as a **monorepo project** inside **angular-microfrontend** project.
```ruby
ng generate application <header-app>
```

### Step 3 - Creating "Custom Element"

In order to make `header-app` as a customer element we need to import `Injector` from the `@angular/core` package and `createCustomElement` from the `@angular/elements` package:

Make the necessery changes in `projects/header-app/src/index.html`
```ruby
<header-app></header-app>
<base href="./">
```

Specify **ngZone** as **noop** in `projects/header-app/src/main.ts`
```ruby
platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
```

Create AppComponent as a cunstom element in `projects/header-app/src/app/app.module.ts`
```ruby
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export class AppModule {
  constructor(private injector: Injector){}
  
  ngDoBootstrap() {
    const headerApp = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('header-app', headerApp);
  }
}
```
Remove `AppComponent` from `bootstrap` and consider as a `entryComponents` 
```ruby
bootstrap: [],
entryComponents: [AppComponent]
```

### Step 4 - Creating a Angular Web Component with Ngx-build-plus
Use `ngx-build-plus` to compile Angular Elements

```ruby
ng add ngx-build-plus
```
Note: 
*That will change the `"builder"` from `@angular-devkit/build-angular:browser` to `ngx-build-plus:browser`
*And will add `"ngx-build-plus": "^11.0.0"`, as a dependencies
```

Adds webcomponent polyfills to your app
```ruby
ng g ngx-build-plus:wc-polyfill
or 
ng g ngx-build-plus:wc-polyfill --project myProject
```

Note: 
```
That will change 
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
```ruby
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
