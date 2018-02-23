import { Component, OnInit, ViewChild , ElementRef , Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  @ViewChild('firstName') firstName: ElementRef;

  constructor(private renderer: Renderer, private router: Router) { }

  ngOnInit() {
    const element = this.renderer.selectRootElement(this.firstName.nativeElement);
    setTimeout(() => element.focus(), 0);
  }

  /**
   * @description - Invoke login component
   */
  login(eventObj) {
    this.router.navigateByUrl('/auth/sign-in');
    eventObj.preventDefault();
  }

}
