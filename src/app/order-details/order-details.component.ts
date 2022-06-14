import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// import { Product, products } from '../products';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService

    ) { }

    addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit() {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  // this.product = products.find(product => product.id === productIdFromRoute);
  }

 // product: Product | undefined;

}
