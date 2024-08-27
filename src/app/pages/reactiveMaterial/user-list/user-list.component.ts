import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit{

  // users: data[] = [];
  // userPage: number = 0;
  // totalUsers: number = 0;
  // dataSource: MatTableDataSource<data> = new MatTableDataSource<data>([]);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // constructor( private serviceReq: reqService, private dialog: MatDialog ) {
  //   this.dataSource = new MatTableDataSource(this.users);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit(): void {
    // const saveDatos = localStorage.getItem('user');
    // if (saveDatos) {
    //   this.users = JSON.parse(saveDatos);
    // } else {
    // }
    // this.getUsuarios();
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // getUsuarios(): void {
  //   this.serviceReq.getUsers().subscribe((response: IUsuario) => {
  //     this.users = response.data;
  //     localStorage.setItem('user', JSON.stringify(this.users));
  //   });
  // }


  // getPage(page: number): void {
  //   this.getUsuarios(page + 2);
  // }

  // deleteUser( id: number ): void {
  //   this.serviceReq.deleteUser(id).pipe(
  //     take(1)
  //   ).subscribe(() => {
  //     this.users = this.users.filter((user: data) => user.id !== id);
  //     localStorage.setItem('user', JSON.stringify(this.users))
  //   })
  // }



  // editUsers( user: data ): void {
  //   const dialogRef = this.dialog.open(AddEditUserComponent, {
  //     width: '400px',
  //     data: user
  //   });
  // }
}
