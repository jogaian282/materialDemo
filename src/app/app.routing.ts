import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'rental-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'rental-dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'theme-management',
        loadChildren: 'app/settings/settings.module#SettingsModule'
      }
    ]
  },
  { path: '**', redirectTo: 'auth'},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash : true});
