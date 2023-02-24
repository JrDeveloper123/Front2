import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit { 
  public estudiosList: Educacion[] = [];
  public borrarEstudios: Educacion | undefined;

  form: FormGroup;
  modo: string = '';
 
  hasAccess = true;
  constructor(
    private formBuilder: FormBuilder,
    private educacionService: EducacionService,
    ) {
    this.form = this.formBuilder.group(
      {
        educationId: [],
        institution: ['', [Validators.required]],
        degree: ['', [Validators.required]],
        entry:[''],
        discharge:['']
       
      }
    )
  }

  ngOnInit(): void {
    this.getEstudios();

   // this.hasAccess=(window.sessionStorage.getItem('isAdmin') === 'true' || window.sessionStorage.getItem('isCollaborator') === 'true');
    


  }
  
  public getEstudios(): void {
    this.educacionService.obtenerDatos().subscribe(
      
      data =>{
        console.log(data);
        this.estudiosList = data;
     
    })
  }
  



  public abrirModal(modo: string, estudios?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.form.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addEducacionModal').on('shown.bs.modal', function () {
      $('#nombreEducacion').focus();
    });
    
    if (modo === 'add') {
      $("#tituloModalEducacion").html("Registrar Nuevos Estudios");

      button.setAttribute('data-target', '#addEducacionModal');
    } else if (modo === 'delete') {
      this.borrarEstudios = estudios;
      button.setAttribute('data-toggle', '#deleteEducacionModal');
    } else if (modo === 'edit') {
      
      $("#tituloModalEducacion").html("Editar Educacion");

      this.cargarForm(estudios!);
      button.setAttribute('data-toggle', '#addEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public guardarEstudios(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      if (this.modo === 'add') {
        this.educacionService.save(this.form.value).subscribe({
          next: (response: Educacion) => {

            
            this.getEstudios();

          },
         
        });


      }
      else if (this.modo === 'edit') {

        this.educacionService.update(this.form.value.educationId,this.form.value).subscribe({
          next: (response: Educacion) => {
            
            this.getEstudios();
          },
       
        });
      }
    }
  }

  get Nombre() { return this.form.get("institution"); }
  get Titulo() { return this.form.get("degree"); }




  public onDeleteEstudios(id: number): void {
  
      this.educacionService.delete(id).subscribe({
        next: (response: void) => {
          //console.log(response);
         
          this.getEstudios();

        },
        
      });
    }
  
  

  public cargarForm(estudios: Educacion) {
    this.form.patchValue(estudios)
  }
}
