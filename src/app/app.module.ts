import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDisplayShelfComponent } from './product-display/product-display-shelf/product-display-shelf.component';
import { ProductDisplayItemComponent } from './product-display/product-display-shelf/product-display-item/product-display-item.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductDisplayShelfComponent,
    ProductDisplayItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductDisplayShelfComponent},
      {path: 'product', component: ProductDisplayItemComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
