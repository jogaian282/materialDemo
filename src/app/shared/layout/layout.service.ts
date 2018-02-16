import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {

  data = new BehaviorSubject('default-theme');

  currentData = this.data.asObservable();

  constructor() { }

  updateData(colorName:any) {
    this.data.next(colorName);
  }

}
