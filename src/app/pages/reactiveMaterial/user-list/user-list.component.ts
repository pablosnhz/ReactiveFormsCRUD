import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { data, IUsuario } from 'src/app/models/usuarios';
import { reqService } from 'src/app/services/req.service';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit{

  users: data[] = [];
  userPage: number = 0;
  totalUsers: number = 0;

  constructor( private serviceReq: reqService, private dialog: MatDialog ){}

  ngOnInit(): void {
    // const saveDatos = localStorage.getItem('user');
    // if (saveDatos) {
    //   this.users = JSON.parse(saveDatos);
    // } else {
    // }
    this.getUsuarios();
  }

  getUsuarios(page: number = 1): void {
    this.serviceReq.getUsersPage(page).subscribe((response: IUsuario) => {
      this.users = response.data;
      localStorage.setItem('user', JSON.stringify(this.users));
    });
  }


  deleteUser( id: number ): void {
    this.serviceReq.deleteUser(id).pipe(
      take(1)
    ).subscribe(() => {
      this.users = this.users.filter((user: data) => user.id !== id);
      localStorage.setItem('user', JSON.stringify(this.users))
    })
  }

  getPage(page: number): void {
    this.getUsuarios(page + 2);
  }


  // editUsers( user: data ): void {
  //   const dialogRef = this.dialog.open(AddEditUserComponent, {
  //     width: '400px',
  //     data: user
  //   });
  // }
}
