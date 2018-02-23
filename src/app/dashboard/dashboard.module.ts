import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutes, DashboardComponents } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    MaterialModule,
    FormsModule
  ],
  declarations: [DashboardComponents]
})
export class DashboardModule { }
