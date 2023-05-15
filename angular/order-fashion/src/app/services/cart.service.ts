import { Injectable, computed, signal } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$ = new BehaviorSubject<IProduct[]>([]);
  public products: IProduct[] = [];
  public cartItems = signal<IProduct[]>([]);
  constructor() {}
  totalItem = computed(() => this.cartItems().length);

  /* add product to cart */
  addProduct(product: IProduct) {
    this.products.push(product);
  }
  /* remote product to cart */
  removeProduct(id: number) {
    this.products.splice(id, 1);
  }
}
