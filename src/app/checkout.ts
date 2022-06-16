import {Component} from '@angular/core';

export interface Section {
  name: string;
  price: string;
}

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'checkout',
  styleUrls: ['checkout.css'],
  templateUrl: 'checkout.html',
})
export class checkout {
  purchase(){
    console.log("Submit button was pressed")
  }
  cartItems: Section[] = [
    {
      name: 'Harry Potter',
      price:"$20"
    },
    {
      name: 'Cat in The Hat',
      price:"$30"
    },
    {
      name: 'The Great Gatsby',
      price:"$50"
    },
  ];
  
}

