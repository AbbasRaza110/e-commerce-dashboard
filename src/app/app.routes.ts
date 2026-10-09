import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/features/feature.routes').then((m) => m.FEATURE_ROUTES),
  },
  { path: '**', redirectTo: '/auth/login' },
];
