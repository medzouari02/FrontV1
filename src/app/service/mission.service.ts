import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiUrl = 'http://127.0.0.1:8000/api/reclamations';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data) // ⚠️ on extrait le tableau
    );
  }

  addTechnicianToMission(id: number, technicien_id: number): Observable<any> {
    const url = `${this.apiUrl}/add-tech`;
    const payload = { id, technicien_id };
    return this.http.post<any>(url, payload);
  }
  terminerReclamation(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, {}); // Pas besoin d'envoyer de body, à moins que tu veuilles transmettre d'autres infos
  }
  getMissionsByTelephone(telephone: string): Observable<Mission[]> {
    const url = `${this.apiUrl}/telephone/${telephone}`;
    return this.http.get<any>(url).pipe(
      map(response => response.data)
    );
  }
  createReclamation(mission: Partial<Mission>): Observable<any> {
    const payload = {
      nom_client: mission.nom_client,
      adress: mission.adress,
      adress_email: mission.adress_email,
      telephone: mission.telephone,
      description: mission.description,
      type: mission.type,
      etat: 'en attente' // valeur par défaut
    };

    return this.http.post<any>(this.apiUrl, payload);
  }
}
