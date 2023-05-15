import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  total: number = 0;
  constructor(public cartService: CartService) {}
  ngOnInit(): void {
    this.total = this.cartService.totalItem();
  }
}
