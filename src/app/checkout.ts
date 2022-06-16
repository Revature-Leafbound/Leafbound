import {Component} from '@angular/core';

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
}

