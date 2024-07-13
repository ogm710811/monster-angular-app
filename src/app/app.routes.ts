import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'monsters',
    loadChildren: () => import('./features/monster-list/monster-list.module')
      .then(m => m.MonsterListModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
