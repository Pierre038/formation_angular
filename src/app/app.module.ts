import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';

import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce' },
    { provide: LOCALE_ID, useValue: navigator.language }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
