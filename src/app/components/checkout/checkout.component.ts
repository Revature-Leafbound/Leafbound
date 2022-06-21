import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  price: string;
}

@Component({
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  purchase() {
    console.log('Submit button was pressed');
  }
  cartItems: Section[] = [
    {
      name: 'Harry Potter',
      price: '$20',
    },
    {
      name: 'Cat in The Hat',
      price: '$30',
    },
    {
      name: 'The Great Gatsby',
      price: '$50',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
