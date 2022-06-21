import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplayShelfComponent } from './components/product-display/product-display-shelf/product-display-shelf.component';
import { ProductItemComponent } from './components/product-display/product-item/product-item.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NavBarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { Cart } from './models/cart.model';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductItemComponent,
    UserProfileComponent,
    RegisterComponent,
    NavBarComponent,
    CheckoutComponent,
    CartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductDisplayComponent },
      { path: 'product/shelf', component: ProductDisplayShelfComponent },
      { path: 'product/item', component: ProductItemComponent },
      { path: '', redirectTo: '/product/shelf', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
