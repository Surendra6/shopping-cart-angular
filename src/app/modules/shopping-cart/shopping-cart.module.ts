import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import {DemoMaterialModule} from '../../../material-module';    // Angular material components

import { ShoppingCartLayoutComponent } from '../../components/shopping-cart/shopping-cart-layout/shopping-cart-layout.component';

@NgModule({
  declarations: [ShoppingCartLayoutComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    DemoMaterialModule
  ]
})
export class ShoppingCartModule { }
