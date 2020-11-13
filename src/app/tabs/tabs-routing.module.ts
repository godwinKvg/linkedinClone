import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../pages/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'network',
        loadChildren: () => import('../pages/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../pages/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('../pages/tab5/tab5.module').then( m => m.Tab5PageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
