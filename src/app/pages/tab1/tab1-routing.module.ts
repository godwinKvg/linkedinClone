import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./../post-detail/post-detail.module').then(m => m.PostDetailPageModule)
  },
  {
    path: '#search',
    loadChildren: () => import('./../search/search.module').then(m=>m.SearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
