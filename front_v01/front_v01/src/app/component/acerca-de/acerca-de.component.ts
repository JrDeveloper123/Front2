import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit { 

 
  public personas: Persona[] = [];
  public borrarPersona: Persona | undefined;
  
  form: FormGroup;
  modo: string = '';
 
  hasAccess = true;
  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    ) {
    this.form = this.formBuilder.group(
      {
        personId: [],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        about:[''],
        address:[''],
        degree:[''],
        mail:[''],
        phone:['']
       
      }
    )
  }

  ngOnInit(): void {
    this.getPersona();

   // this.hasAccess=(window.sessionStorage.getItem('isAdmin') === 'true' || window.sessionStorage.getItem('isCollaborator') === 'true');
    


  }
  
  public getPersona(): void {
    this.personaService.obtenerDatos().subscribe(
      
      data =>{
        console.log(data);
        this.personas = data;
     
    })
  }
  



  public abrirModal(modo: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.form.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addAboutModal').on('shown.bs.modal', function () {
      $('#nombreAbout').focus();
    });
    
    if (modo === 'add') {
      $("#tituloModalAbout").html("Registrar Nuevo Acerca de");

      button.setAttribute('data-target', '#addAboutModal');
    } else if (modo === 'delete') {
      this.borrarPersona = persona;
      button.setAttribute('data-toggle', '#deleteAboutModal');
    } else if (modo === 'edit') {
      
      $("#tituloModalAbout").html("Editar About");

      this.cargarForm(persona!);
      button.setAttribute('data-toggle', '#addAboutModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public guardarPersona(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      if (this.modo === 'add') {
        this.personaService.save(this.form.value).subscribe({
          next: (response: Persona) => {

            
            this.getPersona();

          },
         
        });


      }
      else if (this.modo === 'edit') {

        this.personaService.update(this.form.value.personId,this.form.value).subscribe({
          next: (response: Persona) => {
            
            this.getPersona();
          },
       
        });
      }
    }
  }

  get Nombre() { return this.form.get("name"); }
  get Apellido() { return this.form.get("surname"); }




  public onDeletePersona(id: number): void {
  
      this.personaService.delete(id).subscribe({
        next: (response: void) => {
          //console.log(response);
         
          this.getPersona();

        },
        
      });
    }
  
  

  public cargarForm(persona: Persona) {
    this.form.patchValue(persona)
  }
}





