import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @Output() forgotPasswordEvent = new EventEmitter<string>();
  
  popUpContainer: string = "forgot-password";

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>) { }

  closePopup() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
