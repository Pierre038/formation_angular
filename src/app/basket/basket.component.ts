import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../model/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket: Product[] = [];

  constructor(private router: Router) {
    this.basket = (window as any).basket;
  }

  checkout() {
    (window as any).basket = [];
    this.router.navigate(['']);
  }
}
