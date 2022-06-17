import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { checkout } from './checkout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { navbar } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductShelfComponent } from './components/products/product-shelf/product-shelf.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductShelfItemComponent } from './components/products/product-shelf/product-shelf-item/product-shelf-item.component';

@NgModule({
  declarations: [checkout, navbar, ProductsComponent, ProductShelfComponent, ProductItemComponent, ProductShelfItemComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [checkout],
})
export class AppModule {}
