import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.construirFormulario.group({
    name: ['Pepe 3',[Validators.required]],
    email: ['pepe3@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private construirFormulario: FormBuilder,
              private router: Router){}


  registro(){
    // console.log(this.miFormulario.valid);
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard')
  }

}
