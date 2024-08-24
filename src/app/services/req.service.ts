import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data, IUsuario } from '../models/usuarios';

@Injectable({providedIn: 'root'})
export class reqService {

  private apiUrlReq = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(page:number): Observable<IUsuario> {
    return this.httpClient.get<IUsuario>(`${this.apiUrlReq}?page=${page}`);
  }

  getUser(id: number): Observable<IUsuario> {
    return this.httpClient.get<IUsuario>(`${this.apiUrlReq}/${id}`)
  }

  createUser( user: IUsuario ): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(`${this.apiUrlReq}`, user)
  }

  updateUser( user: IUsuario, id: number ): Observable<IUsuario> {
    return this.httpClient.put<IUsuario>(`${this.apiUrlReq}/${id}`, user)
  }

  deleteUser( id: number ): Observable<IUsuario> {
    return this.httpClient.delete<IUsuario>(`${this.apiUrlReq}/${id}`)
  }

}
