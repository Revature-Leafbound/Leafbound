import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PRODUCTS } from '../models/mock-products';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product?: Product;
  private selectedProduct = new BehaviorSubject(this.product);
  currentSelectedProduct = this.selectedProduct.asObservable();

  constructor(private http: HttpClient) {}

  updateSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
}
