import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const PASSWORD_KEY = 'password';

@Injectable({
  providedIn: 'root'
})





export class TokenService {

  constructor() { }
/*
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string {
  return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,username);
  }

  public getUsername(): string {
    return window.sessionStorage.getItem(USERNAME_KEY);
    }

    public setPassword(password: string) {
      window.sessionStorage.removeItem(PASSWORD_KEY);
      window.sessionStorage.setItem(PASSWORD_KEY,password);
    }
  
    public getPassword(): string {
      return window.sessionStorage.getItem(PASSWORD_KEY);
      }

      public logOut(): void {
        window.sessionStorage.clear();
      }*/
    }
