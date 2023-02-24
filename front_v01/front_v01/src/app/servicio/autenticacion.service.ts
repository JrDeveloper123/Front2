import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  

  authUrl:string='http://localhost:8080'

  constructor(private httpClient:HttpClient) { }

  public nuevo(usuario: Usuario):Observable<any>{
    return this.httpClient.post<any>(this.authUrl+'/register',usuario);
  }

  public login(usuario:Usuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl+'/login',usuario);
  }
  
}
