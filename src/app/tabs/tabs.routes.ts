import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab4Page } from '../tab4/tab4.page';
import { Tab5Page } from '../tab5/tab5.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page
      },
      {
        path: 'tab2',
        component: Tab2Page
      },
      {
        path: 'tab3',
        component: Tab3Page
      },
      {
        path: 'tab4',
        component: Tab4Page
      },
      {
        path: 'tab5',
        component: Tab5Page
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
