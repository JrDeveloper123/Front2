import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { BannerComponent } from './component/banner/banner.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { EducacionService } from './servicio/educacion.service';
import { HabilidadesService } from './servicio/habilidades.service';
import { ImagenService } from './servicio/imagen.service';
import { PersonaService } from './servicio/persona.service';
import { ProyectoService } from './servicio/proyecto.service';
import { InterceptorService } from './servicio/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
 
    HabilidadesComponent,
    ProyectosComponent,
    EducacionComponent,
    AcercaDeComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    PortfolioComponent,
    IniciarSesionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EducacionService,
              HabilidadesService,
              ImagenService,
              PersonaService,
              ProyectoService,
            //  { provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
