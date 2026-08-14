import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/basic-pages/basic-pages.component'),
  },
  {
    path: 'numbers',
    title: 'Pipes Numbers',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
  },
  {
    path: 'uncommon',
    title: 'Pipes No Tan Comúnes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
