import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @Output() signInEvent = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>) { }

  popUpContainer: string = "sign-in";

  navigateToSignIn() {
    this.signInEvent.emit(this.popUpContainer);
  }

  closePopup() {
    this.dialogRef.close();
  }

  createAccount() {
    
  }

  ngOnInit() {
  }

}
