import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getItems() {
    return this.http.get(this.rootURL + '/products');
  }

  addToCart(product: any, id: number) {
    product.id = id;
    return this.http.post(this.rootURL + '/products', product)
  }

  clearCart() {
    this.http.delete(this.rootURL + '/products').subscribe(data => {
      console.log(data);
    });
    return this.http.get(this.rootURL + '/products');
  }

  /* items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  */
}

