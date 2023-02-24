import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'http://localhost:8080/education/';

  constructor(private httpClient: HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.httpClient.get(this.educacionURL + 'list');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educacionURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educacionURL + `detailname/${nombre}`);
  }

  public save(estudios: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL + 'create',estudios);
  }

  public update( id:number,estudios: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.educacionURL + `update/${id}`, estudios);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + `delete/${id}`);
  }
}
