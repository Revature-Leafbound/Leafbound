import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  user?: User;
  cartId?: any;

  constructor(
    private appService: ProductService,
    private http: HttpClient,
    private router: Router
  ) {}

  onAddToCart(): void {
    console.log(this.currentSelectedProduct);

    // get user to insert into body
    const body = {
      product: this.currentSelectedProduct,
      quantity: 1,
      user: this.user,
    };

    const token = localStorage.getItem('token');

    if (token === null) {
      this.router.navigate(['/login']);
    } else {
      // Grab token to be inserted
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      };

      // make post request
      this.http
        .put<any>('http://localhost:8080/api/v1/cart', body, { headers })
        .subscribe((data) => {
          this.cartId = data.id;
        });
    }
  }

  getId(isbn: string): string {
    return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg';
  }

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(
      (product) => (this.currentSelectedProduct = product)
    );
  }
}
