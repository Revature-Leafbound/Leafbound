import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

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
  user?:User;
  cartId?:number;


  url = environment.apiUrl + '/product/all';

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
    
    // get user to insert into body
    const body = { 
      product: product,
      quantity: 1,
      user: this.user
    }

    // Grab token to be inserted
    const headers = {
      'Authorization':'Bearer the-token'
    }

    // make post request
    this.http.put<any>('http://localhost:8080/api/v1/cart', body, { headers }).subscribe(data => {
      this.cartId = data.id
    })
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
