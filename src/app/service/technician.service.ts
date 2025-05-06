import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private apiUrl = 'http://127.0.0.1:8000/api/techniciens';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  // Get all technicians
  getTechnicians(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new technician
  registerTechnicien(technicienData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/store`, technicienData);
  }
  getTechnicienById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Update a technician
  updateTechnician(id: number, technician: Partial<User>): Observable<any> {
    const payload = {
      name: technician.name,
      email: technician.email,
      telephone: technician.telephone
    };
    return this.http.put(`${this.apiUrl}/edit/${id}`, { id, ...payload }, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }



  // Delete a technician
  deleteTechnician(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
