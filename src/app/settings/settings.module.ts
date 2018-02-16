import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SettingsRoutes } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SettingsRoutes
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
