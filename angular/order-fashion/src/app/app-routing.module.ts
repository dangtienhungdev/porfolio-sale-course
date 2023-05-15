import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
