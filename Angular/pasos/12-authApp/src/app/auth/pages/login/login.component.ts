import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

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
              private router: Router,
              private servicioAuth: AuthService){}


  login(){
    /* this.servicioAuth.validarToken()
      .subscribe( resp => {
        console.log(resp);
      }) */
    // console.log(this.miFormulario.valid);
    // console.log(this.miFormulario.value);

    const {email, password } = this.miFormulario.value;

    this.servicioAuth.login(email, password)
      .subscribe(valido => {
        // console.log(valido);

        if(valido===true){
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error', valido, 'error')
        }
      });
    // this.router.navigateByUrl('/dashboard');
  }

}
