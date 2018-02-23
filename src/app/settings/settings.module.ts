import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SettingsRoutes, SettingComponents } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SettingsRoutes
  ],
  declarations: [SettingComponents]
})
export class SettingsModule { }
