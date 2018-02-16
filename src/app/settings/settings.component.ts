import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../shared/layout/layout.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  selectedColor:string;

  constructor(public layoutService:LayoutService) { }

  ngOnInit() {
  }

  themeColors = [
    {value:'default-theme',viewValue:'DeepPurple'},
    {value: 'light-green-theme', viewValue: 'LightGreen'},
    {value: 'amber-theme', viewValue: 'Amber'},
    {value: 'blue-theme',viewValue:'Blue'}
  ];

  selectTheme(selectedColor,eventObject) {
    this.selectedColor = selectedColor;
    this.layoutService.updateData(this.selectedColor);
  }

}
