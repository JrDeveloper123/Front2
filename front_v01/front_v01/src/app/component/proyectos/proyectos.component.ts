import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectosList: Proyecto[] = [];
  public borrarProyecto: Proyecto | undefined;

  form: FormGroup;
  modo: string = '';
 
  hasAccess = true;
  constructor(
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    ) {
    this.form = this.formBuilder.group(
      {
        proyectid: [],
        name: ['', [Validators.required]],
        detail: [''],
        urlImage:[''],
        urlProyect:['']
       
      }
    )
  }

  ngOnInit(): void {
    this.getProyecto();

   //this.hasAccess=(window.sessionStorage.getItem('') === 'true' || window.sessionStorage.getItem('isCollaborator') === 'true');
    


  }
  
  public getProyecto(): void {
    this.proyectoService.obtenerDatos().subscribe(
      
      data =>{
        console.log(data);
        this.proyectosList = data;
     
    })
  }
  



  public abrirModal(modo: string, proyecto?: Proyecto): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.form.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addProyectoModal').on('shown.bs.modal', function () {
      $('#nombreProyecto').focus();
    });
    
    if (modo === 'add') {
      $("#tituloModalProyecto").html("Registrar Nuevo Proyecto");

      button.setAttribute('data-target', '#addProyectoModal');
    } else if (modo === 'delete') {
      this.borrarProyecto = proyecto;
      button.setAttribute('data-toggle', '#deleteProyectoModal');
    } else if (modo === 'edit') {
      
      $("#tituloModalProyecto").html("Editar Proyecto");

      this.cargarForm(proyecto!);
      button.setAttribute('data-toggle', '#addProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public guardarProyecto(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      if (this.modo === 'add') {
        this.proyectoService.save(this.form.value).subscribe({
          next: (response: Proyecto) => {

            
            this.getProyecto();

          },
         
        });


      }
      else if (this.modo === 'edit') {

        this.proyectoService.update(this.form.value.proyectid,this.form.value).subscribe({
          next: (response: Proyecto) => {
            
            this.getProyecto();
          },
       
        });
      }
    }
  }

  get Nombre() { return this.form.get("name"); }
  get Detalle() { return this.form.get("detail"); }
  




  public onDeleteProyecto(id: number): void {
  
      this.proyectoService.delete(id).subscribe({
        next: (response: void) => {
          //console.log(response);
         
          this.getProyecto();

        },
        
      });
    }
  
  

  public cargarForm(proyecto: Proyecto) {
    this.form.patchValue(proyecto)
  }
}
