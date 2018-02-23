import { Component, OnInit, ViewChild , ElementRef , Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  hide = true;

  constructor(private renderer: Renderer,
  private router: Router) { }

  ngOnInit() {
    const element = this.renderer.selectRootElement(this.username.nativeElement);
    setTimeout(() => element.focus(), 0);
  }

  /**
   * @description - login method
   */
  authVerification(eventObj) {
    this.router.navigateByUrl('rental-dashboard');
    eventObj.preventDefault();
  }

  /**
   * @description - Invoke register component
   */
  register(eventObj) {
    this.router.navigateByUrl('/auth/sign-up');
    eventObj.preventDefault();
  }
}
