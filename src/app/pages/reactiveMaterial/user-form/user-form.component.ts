import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { data, IUsuario } from 'src/app/models/usuarios';
import { reqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  response: any;

  constructor( private serviceReq: reqService ){}


  ngOnInit(): void {
    this.getUsuarios();
  }


  getUsuarios(): void {
    this.serviceReq.getUsers().pipe(
      take(1)
    ).subscribe((response: IUsuario) => {
      this.response = response.data
    });
  }
}
