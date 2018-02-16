import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'material-home',
        pathMatch:'full'
      },
      {
        path:'material-home',
        loadChildren:'app/home/home.module#HomeModule'
      },
      {
        path:'material-dashboard',
        loadChildren:'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'theme-management',
        loadChildren:'app/settings/settings.module#SettingsModule'
      }
    ]
  }
];

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(routes,{useHash : true});
