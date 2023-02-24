import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL:string = 'http://localhost:8080/person/';

  constructor(private httpClient: HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.httpClient.get(this.personaURL + 'list');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detailname/${nombre}`);
  }

  public save(proyecto: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + 'create', proyecto);
  }

  public update(id: number, proyecto: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
}
