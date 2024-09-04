import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getLogin(email: string, password: string): Observable <any> {
    return this.http.post(`${this.apiUrl}/login`, {email, password});
  }

  getUser(): Observable<any>{
    return this.http.get(`http://localhost:3000/users`);
  }

  addUser(dataUser: any): Observable<any> {
    return this.http.post(`http://localhost:3000/users`, dataUser)
  }

  deleteUser( id: number ): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }

  editUser( dataEdit: any, id: number ): Observable<any>{
    return  this.http.put(`http://localhost:3000/users/${id}`, dataEdit);
  }
}
