import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogData, HeaderContactsComponent } from '../header-contacts/header-contacts.component';

@Component({
  selector: 'app-ordering-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ordering-dialog.component.html',
  styleUrl: './ordering-dialog.component.scss'
})
export class OrderingDialogComponent implements OnInit {
  ordering!: FormGroup;
  fb = inject(FormBuilder);

  constructor(
    public dialogRef: MatDialogRef<HeaderContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.ordering = this.fb.group({
      name: [''],
      phone: ['']
    })
  }

  submit() {
    console.log('submit',this.ordering)
  }

  onNoClick(): void {
    this.dialogRef.close(this.ordering.value);
  }

}
