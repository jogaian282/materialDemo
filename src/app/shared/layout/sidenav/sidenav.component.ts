import { Component, OnInit , ViewChild, AfterViewInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SidenavComponent implements OnInit,AfterViewInit {

  @ViewChild('sidenav') sideNav;

  sideNavReference;

  constructor() {
  }

  ngOnInit() {
    this.sideNavReference = this.sideNav;
  }

  ngAfterViewInit() {

  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

}
