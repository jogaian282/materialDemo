import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path:'',redirectTo:'settings',pathMatch:'full' },
  { path:'settings',component:SettingsComponent }
];

export const SettingsRoutes = RouterModule.forChild(routes);
