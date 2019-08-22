import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiRoutingModule } from './emoji-routing.module';
import {DemoMaterialModule} from '../../../material-module';    // Angular material components

import { EmojiLayoutComponent } from '../../components/emoji/emoji-layout/emoji-layout.component';
import { EmojiStatusComponent } from '../../components/emoji/emoji-status/emoji-status.component';

@NgModule({
  declarations: [
    EmojiLayoutComponent, 
    EmojiStatusComponent
  ],
  imports: [
    CommonModule,
    EmojiRoutingModule,
    DemoMaterialModule
  ]
})
export class EmojiModule { }
