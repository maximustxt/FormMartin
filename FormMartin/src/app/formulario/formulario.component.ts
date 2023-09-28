import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  //- Para reducir y ordenar el codigo :

  //---------------- GETTERS DEL NAME DEL USER :

  get nameUser() {
    return this.userForm.controls['name'];
  }

  get nameInvalido() {
    return this.nameUser.invalid && this.nameUser.touched;
  }

  //--------------- GETTERS DEL EMAIL DEL USER

  get emailUser() {
    return this.userForm.controls['email'];
  }

  get emailInvalido() {
    return this.emailUser.invalid && this.emailUser.touched;
  }

  //--------------- GETTERS DEL PASSWORD DEL USER

  get passwordUser() {
    return this.userForm.controls['password'];
  }

  get passwordInvalida() {
    return this.passwordUser.invalid && this.passwordUser.touched;
  }

  OnSubmit() {
    if (
      !this.userForm.value.email ||
      !this.userForm.value.name ||
      !this.userForm.value.password
    ) {
      alert('Debes completar todos los campos');
    } else if (this.userForm.invalid) {
      alert('Hay errores en los campos');
    } else {
      console.log(this.userForm.value);
    }
  }
}
