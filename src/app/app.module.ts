import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplayShelfComponent } from './components/product-display/product-display-shelf/product-display-shelf.component';
import { ProductItemComponent } from './components/product-display/product-item/product-item.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NavBarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';

import { Cart } from './models/cart.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductItemComponent,
    UserProfileComponent,
    RegistrationFormComponent,
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
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductDisplayComponent },
      { path: 'product/shelf', component: ProductDisplayShelfComponent },
      { path: 'product/item', component: ProductItemComponent },
      { path: '', redirectTo: '/product/shelf', pathMatch: 'full' },
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
