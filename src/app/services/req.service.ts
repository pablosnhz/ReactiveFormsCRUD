import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data, IUsuario } from '../models/usuarios';

@Injectable({providedIn: 'root'})
export class reqService {

  private apiUrlReq = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUsuario> {
    return this.httpClient.get<IUsuario>(`${this.apiUrlReq}?page=${1}`);

  }
}
