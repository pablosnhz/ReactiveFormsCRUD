import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from 'src/app/models/usuarios';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  users: data[] = [];

  constructor(private dialog: MatDialog) {   }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users.push(result);
        localStorage.setItem('user', JSON.stringify(this.users));
      }
    });
  }



}
