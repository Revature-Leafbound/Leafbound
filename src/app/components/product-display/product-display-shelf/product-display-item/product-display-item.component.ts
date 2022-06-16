import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';

@Component({
  selector: 'app-product-display-item',
  templateUrl: './product-display-item.component.html',
  styleUrls: ['./product-display-item.component.css']
})
export class ProductDisplayItemComponent implements OnInit {

  products = PRODUCTS;
  product = this.products[1];

  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
