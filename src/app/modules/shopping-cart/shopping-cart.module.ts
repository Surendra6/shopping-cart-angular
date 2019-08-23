import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import {DemoMaterialModule} from '../../../material-module';    // Angular material components

import { ShoppingCartLayoutComponent } from '../../components/shopping-cart/shopping-cart-layout/shopping-cart-layout.component';
import { HeaderComponent } from '../../components/shopping-cart/header/header.component';
import { SidenavComponent } from '../../components/shopping-cart/sidenav/sidenav.component';

@NgModule({
  declarations: [
    ShoppingCartLayoutComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    DemoMaterialModule
  ]
})
export class ShoppingCartModule { }
