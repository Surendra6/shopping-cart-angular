import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartLayoutComponent } from '../../components/shopping-cart/shopping-cart-layout/shopping-cart-layout.component';

const routes: Routes = [{
  path: '',
  component: ShoppingCartLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
