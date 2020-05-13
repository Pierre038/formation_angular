import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data: Product;
  @Output() addToBasket = new EventEmitter<Product>();

  constructor() {}

  addToBasketClick() {
    this.addToBasket.emit(this.data);
  }

  isTheLast() {
    return this.data.stock === 1;
  }
}
