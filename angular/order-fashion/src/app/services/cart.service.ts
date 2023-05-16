import { Injectable, computed, signal } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$ = new BehaviorSubject<IProduct[]>([]);
  public cartItems = signal<IProduct[]>([]);
  public subTotal$ = new BehaviorSubject<number>(0);
  public totalItems$ = new BehaviorSubject<number>(0);
  public totalItem = computed(() => this.cartItems().length);
  public products: IProduct[] = [];

  /* add product to cart */
  addProduct(product: IProduct) {
    this.products.push(product);
  }

  addProductSignal(product: IProduct) {
    this.cartItems.mutate((val) => {
      console.log(
        '🚀 ~ file: cart.service.ts:24 ~ CartService ~ this.cartItems.mutate ~ val:',
        val
      );
      val.push(product);
    });
  }

  /* remote product to cart */
  removeProduct(id: number) {
    this.products.splice(id, 1);
  }

  removeProductSignal(id: number) {
    this.cartItems.mutate((val) => {
      console.log(
        '🚀 ~ file: cart.service.ts:39 ~ CartService ~ this.cartItems.mutate ~ val:',
        val
      );
      val.splice(id, 1);
    });
  }
}
