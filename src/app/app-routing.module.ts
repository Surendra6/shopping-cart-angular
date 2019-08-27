import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaffoldingComponent } from '../app/components/scaffolding/scaffolding.component';
import { NoMatchFoundComponent } from './components/no-match-found/no-match-found.component';


const routes: Routes = [{
  path: 'emoji',
  loadChildren: () => import('../app/modules/emoji/emoji.module').then(mod => mod.EmojiModule)
},
{
  path: 'shopping-cart',
  loadChildren: () => import('../app/modules/shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule)
},
{
  path: '',
  component: ScaffoldingComponent
},
{
  path: '**',
  component: NoMatchFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
