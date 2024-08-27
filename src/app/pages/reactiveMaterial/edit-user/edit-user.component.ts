import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from 'src/app/models/usuarios';
import { reqService } from 'src/app/services/req.service';
import { log } from 'firebase-functions/logger';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { IUsuariojson } from 'src/app/models/userjson';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  users: data[] = [];
  userJson: IUsuariojson[] = [];

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender', 'hours'];
  dataSource = new MatTableDataSource<IUsuariojson>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private reqService: reqService) {   }

  ngOnInit(): void {
    this.getUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditUserComponent , {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users.push(result);
        this.getUsers();
      }
    });
  }

  getUsers(): void {
    this.reqService.getUserJson().subscribe((response: any)=> {
      this.userJson = response
      console.log(this.userJson);

      this.dataSource = new MatTableDataSource(this.userJson);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteUsers(id: number): void {
    const dialogRef = this.dialog.open(UserListComponent)

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.reqService.deleteUserJson(id).subscribe(() => {
          this.getUsers();
        })
      }
    })
  }

  editUsers(data: any): void {
    const dialogRefEdit = this.dialog.open(AddEditUserComponent, {
      data,
      width: '450px',
    })

    dialogRefEdit.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers();
      }
    })
  }

  applyFilter(event: Event) {
    // console.log((event.target as HTMLInputElement).value);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
