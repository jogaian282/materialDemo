import { Component, OnInit, Input , AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() sideBarRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  toggleSideNav() {
    this.sideBarRef.toggle();
  }





}
