import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {

  products = PRODUCTS;
  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
