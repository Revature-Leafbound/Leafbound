import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  currentSelectedProduct?: Product;

  onAddToCart(): void {
    console.log(this.currentSelectedProduct);
  }

  getId(isbn: string): string {
    return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-L.jpg';
  }

  constructor(private appService: ProductService) {}

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(
      (product) => (this.currentSelectedProduct = product)
    );
  }
}
