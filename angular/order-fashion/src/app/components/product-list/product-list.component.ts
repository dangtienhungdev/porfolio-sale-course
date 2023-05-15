import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products: IProduct[] = [];
  constructor(private api: ApiService, private cartService: CartService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }
  /* get All Products */
  getAllProducts() {
    this.api.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
