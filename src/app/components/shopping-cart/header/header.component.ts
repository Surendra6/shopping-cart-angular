import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService, public dialog: MatDialog) {}

  menuOpen() {
    this.sharedService.menuToggle();
  }

  profileClick() {
    this.dialog.open(ProfileDialogComponent, {
      width: '400px'
    });
  }  

  ngOnInit() {
  }

}