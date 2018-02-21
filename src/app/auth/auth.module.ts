import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AuthRoutes
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ]
})

export class AuthModule { }