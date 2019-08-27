import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sideNav: any;
  //private menuElement = new BehaviorSubject<string>(this.sideNav);
  
  constructor() { }

  menuToggle() {
    this.sideNav.toggle();
  }
}
