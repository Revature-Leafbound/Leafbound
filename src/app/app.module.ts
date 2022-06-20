import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplayShelfComponent } from './components/product-display/product-display-shelf/product-display-shelf.component';
import { ProductDisplayItemComponent } from './components/product-display/product-display-shelf/product-display-item/product-display-item.component';
import { ProductItemComponent } from './components/product-display/product-item/product-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { navbar } from './components/navbar/navbar.component';
import { checkout } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductDisplayItemComponent,
    ProductItemComponent,
    UserProfileComponent,
    RegisterComponent,navbar, checkout
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ navbar,checkout],
})
export class AppModule {}
