import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:  'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}
];

export const DashboardRoutes = RouterModule.forChild(routes);

export const DashboardComponents = [ DashboardComponent ];
