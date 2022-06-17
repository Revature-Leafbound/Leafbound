import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplayShelfComponent } from './components/product-display/product-display-shelf/product-display-shelf.component';
import { ProductDisplayItemComponent } from './components/product-display/product-display-shelf/product-display-item/product-display-item.component';
import { ProductItemComponent } from './components/product-display/product-item/product-item.component';
=======
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 21-fe-front-end-review

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductDisplayItemComponent,
    ProductItemComponent
=======
    RegisterComponent
>>>>>>> 21-fe-front-end-review
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductDisplayShelfComponent},
      {path: 'product', component: ProductDisplayItemComponent}
    ]),
=======
    BrowserAnimationsModule
>>>>>>> 21-fe-front-end-review
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
