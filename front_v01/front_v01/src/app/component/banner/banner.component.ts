import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/model/imagen';
import { Persona } from 'src/app/model/persona';
import { ImagenService } from 'src/app/servicio/imagen.service';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  public personas: Persona[] = [];
  public imagen: Imagen[] = [];

  public borrarPersona: Persona | undefined;
  public borrarImagenes: Imagen | undefined;

  formPersona: FormGroup;
  formImagen: FormGroup;
  modo: string = '';

  hasAccess = true;

  constructor(
    private personaService: PersonaService,
    private imagenService: ImagenService,
    private formBuilder: FormBuilder
  ) {
    this.formPersona = this.formBuilder.group({
      personId: [],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      about: [''],
      address: [''],
      degree: [''],
      mail: [''],
      phone: [''],
    });
    this.formImagen = this.formBuilder.group({
      id: [],
      profile: [''],
      backImage: [''],
      proyect1Image: [''],
      proyect2Image: [''],
    });
  }

  ngOnInit(): void {
    this.getPersona();
    this.getImagenes();
  }

  public getPersona() {
    this.personaService.obtenerDatos().subscribe((data) => {
      this.personas = data;
    });
  }

  public getImagenes() {
    this.imagenService.obtenerDatos().subscribe((data) => {
      console.log('Imagenes ', data);
      this.imagen = data;
    });
  }

  public abrirModalPersona(modo: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.formPersona.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addBannerModal').on('shown.bs.modal', function () {
      $('#nombreBanner').focus();
    });

    if (modo === 'add') {
      $('#tituloModalBanner').html('Registrar Nueva Persona');

      button.setAttribute('data-target', '#addBannerModal');
    } else if (modo === 'delete') {
      this.borrarPersona = persona;
      button.setAttribute('data-toggle', '#deleteBannerModal');
    } else if (modo === 'edit') {
      $('#tituloModalBanner').html('Editar Persona');

      this.cargarFormPersona(persona!);
      button.setAttribute('data-toggle', '#addBannerModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public abrirModalImagen(modo: string, imagen?: Imagen): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    this.formImagen.reset();
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    this.modo = modo;
    $('#addImagenModal').on('shown.bs.modal', function () {
      $('#nombreImagen').focus();
    });

    if (modo === 'add') {
      $('#tituloModalImagen').html('Registrar Nueva Imagen');

      button.setAttribute('data-target', '#addImagenModal');
    } else if (modo === 'delete') {
      this.borrarImagenes = imagen;
      button.setAttribute('data-toggle', '#deleteImagenModal');
    } else if (modo === 'edit') {
      $('#tituloModalImagen').html('Editar Imagen');

      this.cargarFormImagen(imagen!);
      button.setAttribute('data-toggle', '#addImagenModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public guardarPersona(event: Event) {
    event.preventDefault;
    if (this.formPersona.valid) {
      if (this.modo === 'add') {
        this.personaService.save(this.formPersona.value).subscribe({
          next: (response: Persona) => {
            this.getPersona();
          },
        });
      } else if (this.modo === 'edit') {
        this.personaService
          .update(this.formPersona.value.personId, this.formPersona.value)
          .subscribe({
            next: (response: Persona) => {
              this.getPersona();
            },
          });
      }
    }
  }

  public guardarImagen(event: Event) {
    event.preventDefault;
    if (this.formImagen.valid) {
      if (this.modo === 'add') {
        this.imagenService.save(this.formImagen.value).subscribe({
          next: (response: Imagen) => {
            this.getImagenes();
          },
        });
      } else if (this.modo === 'edit') {
        this.imagenService
          .update(this.formImagen.value.id, this.formImagen.value)
          .subscribe({
            next: (response: Imagen) => {
              this.getImagenes();
            },
          });
      }
    }
  }

  get Nombre() {
    return this.formPersona.get('name');
  }
  get Apellido() {
    return this.formPersona.get('surname');
  }

  public onDeletePersona(id: number): void {
    this.personaService.delete(id).subscribe({
      next: (response: void) => {
        this.getPersona();
      },
    });
  }

  public onDeleteImagen(id: number): void {
    this.imagenService.delete(id).subscribe({
      next: (response: void) => {
        this.getImagenes();
      },
    });
  }

  public cargarFormImagen(imagen: Imagen) {
    this.formImagen.patchValue(imagen);
  }

  public cargarFormPersona(persona: Persona) {
    this.formPersona.patchValue(persona);
  }
}


