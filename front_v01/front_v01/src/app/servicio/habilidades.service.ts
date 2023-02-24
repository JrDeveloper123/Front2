import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  
  habilidadURL = 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  public obtenerDatos(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.habilidadURL + 'list');
  }

  public detail(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.habilidadURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.habilidadURL + `detailname/${nombre}`);
  }

  public save(habilidad: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.habilidadURL + 'create',habilidad);
  }

  public update( id:number,habilidad: Habilidades): Observable<any> {
    return this.httpClient.put<any>(this.habilidadURL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habilidadURL + `delete/${id}`);
  }
}
