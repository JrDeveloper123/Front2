import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { BannerComponent } from './component/banner/banner.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo: 'portfolio',pathMatch:'full'},
  {path:'contacto', component:AcercaDeComponent},
  {path:'encabezado', component:BannerComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'habilidades', component:HabilidadesComponent},
 //{path:'experiencia',component:ExperienciaLaboralComponent},
  
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
