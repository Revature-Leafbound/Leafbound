import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplayShelfComponent } from './components/product-display/product-display-shelf/product-display-shelf.component';
import { ProductDisplayItemComponent } from './components/product-display/product-display-shelf/product-display-item/product-display-item.component';
import { ProductItemComponent } from './components/product-display/product-item/product-item.component';
=======
=======
import { UserProfileComponent } from './user-profile/user-profile.component';
>>>>>>> 21-fe-front-end-review
import { RegisterComponent } from './components/register/register.component';
=======
>>>>>>> 21-fe-front-end-review
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { checkout } from './checkout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { navbar } from './components/navbar/navbar.component';

@NgModule({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  declarations: [navbar],
=======
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductDisplayItemComponent,
    ProductItemComponent
=======
=======
    UserProfileComponent,
>>>>>>> 21-fe-front-end-review
    RegisterComponent
>>>>>>> 21-fe-front-end-review
  ],
>>>>>>> 21-fe-front-end-review
=======
  declarations: [checkout],
>>>>>>> 21-fe-front-end-review
=======
  declarations: [checkout, navbar],
>>>>>>> 21-fe-front-end-review
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    RoutingModule,
    
=======
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
=======
>>>>>>> 21-fe-front-end-review
  ],
  providers: [],
  bootstrap: [checkout, navbar],
})
export class AppModule {}
