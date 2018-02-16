import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HomeRoutes
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }
