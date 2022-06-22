import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart?: Cart[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  retrieveCart(): void {
    this.cartService.getAll().subscribe({
      next: (data) => {
        this.cart = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  clearCart(): void {
    this.cartService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        // this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
}
