import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../model/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenURL = 'http://localhost:8080/image/';

  constructor(private httpClient: HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.httpClient.get(this.imagenURL + 'list');
  }

  public detail(id: number): Observable<Imagen> {
    return this.httpClient.get<Imagen>(this.imagenURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Imagen> {
    return this.httpClient.get<Imagen>(this.imagenURL + `detailname/${nombre}`);
  }

  public save(imagen: Imagen): Observable<any> {
    return this.httpClient.post<any>(this.imagenURL + 'create',imagen);
  }

  public update( id:number,imagen: Imagen): Observable<any> {
    return this.httpClient.put<any>(this.imagenURL + `update/${id}`, imagen);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `delete/${id}`);
  }
}
