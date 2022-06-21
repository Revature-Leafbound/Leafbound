import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class RoutingModule { }
