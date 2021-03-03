import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]

})
export class AppModule {
  constructor(private injector: Injector){}
  
  ngDoBootstrap() {
    const headerApp = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('header-app', headerApp);
  }
}
