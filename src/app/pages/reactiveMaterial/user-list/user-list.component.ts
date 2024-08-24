import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { data, IUsuario } from 'src/app/models/usuarios';
import { reqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit{

  users: data[] = [];

  constructor( private serviceReq: reqService ){}

  ngOnInit(): void {
    const saveDatos = localStorage.getItem('user');
    if (saveDatos) {
      this.users = JSON.parse(saveDatos);
    } else {
      this.getUsuarios();
    }
  }

  getUsuarios(): void {
    this.serviceReq.getUsers(1).pipe(
      take(1)
    ).subscribe((response: IUsuario) => {
      this.users = response.data
      localStorage.setItem('user', JSON.stringify(this.users))
    })
  }

  deleteUser( id: number ): void {
    this.serviceReq.deleteUser(id).pipe(
      take(1)
    ).subscribe(() => {
      this.users = this.users.filter((user: data) => user.id !== id);
      localStorage.setItem('user', JSON.stringify(this.users))
    })
  }

}
