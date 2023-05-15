import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: IProduct[] = [];
  constructor(public cartService: CartService) {}
  ngOnInit(): void {}
}
