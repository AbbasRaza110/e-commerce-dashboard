import { Routes } from '@angular/router';
import { FeatureLayoutComponent } from './features.component';

export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    component: FeatureLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./analytics/analytics.component').then(
            (m) => m.AnalyticsComponent,
          ),
      },
      // 2. Default redirection if someone navigates to just '/app' or '/dashboard' root links
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
