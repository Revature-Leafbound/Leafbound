import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-display-shelf',
  templateUrl: './product-display-shelf.component.html',
  styleUrls: ['./product-display-shelf.component.css'],
})
export class ProductDisplayShelfComponent implements OnInit {
  isInCart: boolean = false;
  products: any;
  selectedProduct?: Product;
  testingProducts = PRODUCTS;

  url = 'http://localhost:8080/api/v1/product/all';

  @Output() msgToSibling = new EventEmitter<Product>();

  getProducts(): void {
    this.http.get(this.url).subscribe((data) => (this.products = data));
  }

  onSelect(product: Product): void {
    this.appService.updateSelectedProduct(product);
  }

  onAddToCart(product: Product): void {
    //addToCart(product);
    console.log(product);
    this.isInCart = true;
  }

  getId(isbn: string): string {
    return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg';
  }

  constructor(private appService: ProductService, private http: HttpClient) {}

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(
      (selProd) => (this.selectedProduct = selProd)
    );
    this.getProducts();
  }
}
