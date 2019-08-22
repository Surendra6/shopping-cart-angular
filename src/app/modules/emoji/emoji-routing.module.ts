import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmojiLayoutComponent } from '../../components/emoji/emoji-layout/emoji-layout.component';

const routes: Routes = [{
  path: '',
  component: EmojiLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojiRoutingModule { }
