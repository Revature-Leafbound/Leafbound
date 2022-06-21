import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  currentSelectedProduct?: Product;
  user?:User;
  cartId?:any;

  onAddToCart(): void {
    console.log(this.currentSelectedProduct);

    // get user to insert into body
    const body = { 
      product: this.currentSelectedProduct,
      quantity: 1,
      user: this.user
    }

    // Grab token to be inserted
    const headers = {
      'Authorization':'Bearer the-token'
    }    

    // make post request
    this.cartId = this.http.put<any>('http://localhost:8080/api/v1/cart', body, { headers }).subscribe(data => {
      this.cartId = data.id
    })
  }

  getId(isbn: string): string {
    return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg';
  }

  constructor(private appService: ProductService, private http: HttpClient) {}

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(
      (product) => (this.currentSelectedProduct = product)
    );
  }
}
