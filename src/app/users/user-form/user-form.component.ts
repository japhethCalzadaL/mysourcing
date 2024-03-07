import { Component,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @ViewChild('userForm') userForm!: NgForm;

  constructor() { }

  onSubmit() {
    // Acceder a los valores del formulario
    const form = this.userForm.form;
    const nombre = form.controls['nombre'].value;
    const apellido1 = form.controls['apellido1'].value;
    // ... y así sucesivamente para otros campos.

    const user = {
      nombre: nombre,
      apellido1: apellido1,
    };

    // Hacer algo con el objeto JSON (por ejemplo, imprimir en la consola)
    console.log('Información del usuario:', user);
  }

}
