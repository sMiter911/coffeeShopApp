import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly API_URL = environment.API;
  private readonly headers = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client> {
    return this.http.get<Client>(`${this.API_URL}/Clients`);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.API_URL}/Clients/${id}`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.API_URL}/Clients`, client, {
      headers: this.headers,
    });
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(
      `${this.API_URL}/Clients/${client.clientId}`,
      client,
      { headers: this.headers }
    );
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.API_URL}/Clients/${id}`);
  }
}
