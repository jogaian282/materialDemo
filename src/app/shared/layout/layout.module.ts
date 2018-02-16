import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutService } from './layout.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MainLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MainLayoutComponent
  ],
  providers: [LayoutService]
})

export class LayoutModule { }
