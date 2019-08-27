import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  @Output() popUpContainerEvent = new EventEmitter<string>();
  
  popUpContainer: string = "sign-in"; 

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>) { }

  navigateToCreateAccount() {
    this.popUpContainer = "create-account";
    this.popUpContainerEvent.emit(this.popUpContainer);
  }
  
  navigateToForgotPassword() {
    this.popUpContainer = "forgot-password";
    this.popUpContainerEvent.emit(this.popUpContainer);
  }

  closePopup() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
