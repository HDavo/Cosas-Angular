import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.construirFormulario.group({
    email: ['pepe1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private construirFormulario: FormBuilder,
              private router: Router){}


  login(){
    console.log(this.miFormulario.valid);
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard')
  }

}
