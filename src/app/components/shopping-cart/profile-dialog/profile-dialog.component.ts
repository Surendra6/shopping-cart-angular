import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit, AfterViewInit {

  popUpContainer: string = "sign-in";

  constructor() {
  }

  ngOnInit() {
  }

  receivePopUpContainerInfo(data) {
    this.popUpContainer = data;
  }

  ngAfterViewInit() {
  }

}
