import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderingDialogComponent } from '../ordering-dialog/ordering-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-header-contacts',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './header-contacts.component.html',
  styleUrl: './header-contacts.component.scss'
})
export class HeaderContactsComponent {
  logo = "/assets/imgs/header/logo.png";
  call = "/assets/imgs/header/call.png";
  location = "/assets/imgs/header/location.png";
  search = "/assets/imgs/header/Vector.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";
  login = "/assets/imgs/header/login.png";


  ordering!: any;


  constructor(public dialog: MatDialog) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(OrderingDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.ordering = result;
      console.log('The dialog was closed', this.ordering);
    });
  }
}
