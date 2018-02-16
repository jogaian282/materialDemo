import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    MaterialModule,
    FormsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
