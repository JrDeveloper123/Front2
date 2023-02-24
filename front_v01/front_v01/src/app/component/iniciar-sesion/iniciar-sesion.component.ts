import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacionService } from 'src/app/servicio/autenticacion.service';
import { AuthService } from 'src/app/servicio/auth.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 
 
 form : FormGroup;
 
 
  /*

  form: FormGroup;
  isLogged = false;
  isLoginFail = false;
  loginUsuario: Usuario ;

  constructor(private formBuilder:FormBuilder, private tokenService: TokenService, private authService:AutenticacionService, private router:Router){
    this.form=this.formBuilder.group(
      {
        username:['', [Validators.required]],
        password:['', [Validators.required,Validators.minLength(5)]],
       
      }

    )

  }
  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
    }
  }
   onLogin(event:Event):void{
    event.preventDefault;
    this.loginUsuario = new Usuario (this.form.value.username,this.form.value.password);
    this.authService.login(this.loginUsuario).subscribe(
      data=>{
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },err=>{
        this.isLogged = false;
      }
    )
   }

   */

   constructor(private formBuilder:FormBuilder, private autenticacionService:AuthService,private ruta :Router) {
    this.form=this.formBuilder.group(
      {
        username:['', [Validators.required]],
        password:['', [Validators.required,Validators.minLength(5)]],
       
      }

    )
}

ngOnInit(): void {
}

get Username (){
  return this.form.get('email');
}
get Password (){
  return this.form.get('password');
}
onLogin (event:Event){
  event.preventDefault;
 
    this.ruta.navigate(['/portfolio']);
  
}
  
 





















  /*
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private autenticacionService:AuthService,private ruta :Router) {
      this.form=this.formBuilder.group(
        {
          username:['', [Validators.required]],
          password:['', [Validators.required,Validators.minLength(5)]],
         
        }

      )
  }

  ngOnInit(): void {
  }

  get Username (){
    return this.form.get('email');
  }
  get Password (){
    return this.form.get('password');
  }
  onEnviar (event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }*/

}
