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
}
