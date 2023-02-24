import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private ruta:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    
  }

  login():void {
       
       this.ruta.navigate(['/iniciar-sesion']);
  }

  onLogOut(): void {
    //this.tokenService.logOut();
    window.location.reload();
  }

}
