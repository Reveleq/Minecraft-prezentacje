import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Materials, TeamData } from '../../core/models/main.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl: string = environment.apiUrl;
  getDocs() {
    return this.http.get<Materials[]>(`${this.apiUrl}/docs`);
  }
  getOneDocs(id: string) {
    return this.http.get<Materials[]>(`${this.apiUrl}/docs/${id}`);
  }
  getOneTeam(id: string) {
    return this.http.get<TeamData[]>(`${this.apiUrl}/team${id}`);
  }
  getTeam() {
    return this.http.get<TeamData[]>(`${this.apiUrl}/team`);
  }
}
