import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent  } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'sign-in',pathMatch:'full'},
  {path:'sign-in',component: SignInComponent},
  {path:'sign-up',component:SignUpComponent}
];

export const AuthRoutes = RouterModule.forChild(routes);