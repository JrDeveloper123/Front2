import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicio/habilidades.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades: Habilidades[] = [];
  public borrarHabilidad: Habilidades | undefined;

  form: FormGroup;
  modo: string = '';
 
  hasAccess = true;
  constructor(
    private formBuilder: FormBuilder,
    private habilidadService: HabilidadesService,
    ) {
    this.form = this.formBuilder.group(
      {
        id: [],
        technology: ['', [Validators.required]],
        percentage: ['0', [Validators.max(100)]],
       
      }
    )
  }

  ngOnInit(): void {
    this.getHabilidades();

   // this.hasAccess=(window.sessionStorage.getItem('isAdmin') === 'true' || window.sessionStorage.getItem('isCollaborator') === 'true');
    


  }
  
  public getHabilidades(): void {
    this.habilidadService.obtenerDatos().subscribe(
      
      data =>{
        console.log(data);
        this.habilidades = data;
     
    })
  }
  



  public abrirModal(modo: string, habilidad?: Habilidades): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.form.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addHabilidadModal').on('shown.bs.modal', function () {
      $('#nombreHabilidad').focus();
    });
    
    if (modo === 'add') {
      $("#tituloModalHabilidad").html("Registrar Nueva Habilidad");

      button.setAttribute('data-target', '#addHabilidadModal');
    } else if (modo === 'delete') {
      this.borrarHabilidad = habilidad;
      button.setAttribute('data-toggle', '#deleteHabilidadModal');
    } else if (modo === 'edit') {
      
      $("#tituloModalHabilidad").html("Editar Habilidad");

      this.cargarForm(habilidad!);
      button.setAttribute('data-toggle', '#addHabilidadModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public guardarHabilidad(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      if (this.modo === 'add') {
        this.habilidadService.save(this.form.value).subscribe({
          next: (response: Habilidades) => {

            
            this.getHabilidades();

          },
         
        });


      }
      else if (this.modo === 'edit') {

        this.habilidadService.update(this.form.value.id,this.form.value).subscribe({
          next: (response: Habilidades) => {
            
            this.getHabilidades();
          },
       
        });
      }
    }
  }

  get Nombre() { return this.form.get("technology"); }
  get Porcentaje() { return this.form.get("percentaje"); }




  public onDeleteHabilidad(id: number): void {
  
      this.habilidadService.delete(id).subscribe({
        next: (response: void) => {
          //console.log(response);
         
          this.getHabilidades();

        },
        
      });
    }
  
  

  public cargarForm(habilidad: Habilidades) {
    this.form.patchValue(habilidad)
  }
}
