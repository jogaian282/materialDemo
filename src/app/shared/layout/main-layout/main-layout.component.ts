import { Component, OnInit, HostBinding } from '@angular/core';
import { LayoutService } from '../layout.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})

export class MainLayoutComponent implements OnInit {

  currentColor: string;
  isChangeTheme: boolean;
  @HostBinding('class') componentCssClass;

  constructor(private layoutService: LayoutService,
  private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.layoutService.currentData.subscribe(currentData => {
      this.currentColor = currentData;
      if (this.currentColor !== '') {
        this.isChangeTheme = true;
        this.overlayContainer.getContainerElement().classList.add(this.currentColor);
        this.componentCssClass = this.currentColor;
      }
    });
  }



}
