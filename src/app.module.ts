import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { OrderDetailsComponent } from './app/order-details/order-details.component';

import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './app/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialExampleModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     // { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: OrderDetailsComponent },
      { path: 'cart', component: CartComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [CartComponent],
})
export class AppModule { }
