import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(private sharedService: SharedService) { }

  menuItems: string[] = ["Clothing", "Footwear", "Electronics"];
 
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sharedService.sideNav = this.sidenav;
    console.log(this.sidenav);
  }

}
