import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from "@angular/material";
import "hammerjs";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule {}
