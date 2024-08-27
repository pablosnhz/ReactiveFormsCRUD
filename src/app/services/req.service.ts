import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data, IUsuario } from '../models/usuarios';

@Injectable({providedIn: 'root'})
export class reqService {

  private apiUrlReq = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  createUserJson(data: any): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/users`, data);
  }

  updateUserJson(id: number, data: any): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/users/${id}`, data);
  }

  getUserJson(): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/users`);
  }

  deleteUserJson(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }

  // getUsersPage(page:number): Observable<IUsuario> {
  //   return this.httpClient.get<IUsuario>(`${this.apiUrlReq}?page=${page}`);
  // }

  // getUsers(): Observable<IUsuario> {
  //   return this.httpClient.get<IUsuario>(`${this.apiUrlReq}`);

  // }

  // getUser(id: number): Observable<IUsuario> {
  //   return this.httpClient.get<IUsuario>(`${this.apiUrlReq}/${id}`)
  // }

  // createUser( user: IUsuario ): Observable<IUsuario> {
  //   return this.httpClient.post<IUsuario>(`${this.apiUrlReq}`, user)
  // }

  // updateUser( user: IUsuario, id: number ): Observable<IUsuario> {
  //   return this.httpClient.put<IUsuario>(`${this.apiUrlReq}/${id}`, user)
  // }

  // deleteUser( id: number ): Observable<IUsuario> {
  //   return this.httpClient.delete<IUsuario>(`${this.apiUrlReq}/${id}`)
  // }

}









// private apiUrlReq = 'https://svc.cartasur.com.ar/api/Dummy';

// constructor(private httpClient: HttpClient) { }

// getUsers(): Observable<any> {
//   return this.httpClient.get(this.apiUrlReq, { responseType: 'text' });
// }
