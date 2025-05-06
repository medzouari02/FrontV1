import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(userData: Pick<User, 'email' | 'password'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  registerClient(clientData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients/store`, clientData);
  }

  registerTechnicien(technicienData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/techniciens/store`, technicienData);
  }
}
