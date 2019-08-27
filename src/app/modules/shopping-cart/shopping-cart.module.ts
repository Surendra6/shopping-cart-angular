import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import {DemoMaterialModule} from '../../../material-module';    // Angular material components

import { ShoppingCartLayoutComponent } from '../../components/shopping-cart/shopping-cart-layout/shopping-cart-layout.component';
import { HeaderComponent } from '../../components/shopping-cart/header/header.component';
import { SidenavComponent } from '../../components/shopping-cart/sidenav/sidenav.component';
import { LoginComponent } from 'src/app/components/shopping-cart/login/login.component';
import { CreateAccountComponent } from 'src/app/components/shopping-cart/create-account/create-account.component';
import { ProfileDialogComponent } from 'src/app/components/shopping-cart/profile-dialog/profile-dialog.component';
import { ForgotPasswordComponent } from 'src/app/components/shopping-cart/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    ShoppingCartLayoutComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    CreateAccountComponent,
    ProfileDialogComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    DemoMaterialModule
  ],
  entryComponents: [LoginComponent, CreateAccountComponent, ProfileDialogComponent, ForgotPasswordComponent]
})
export class ShoppingCartModule { }
