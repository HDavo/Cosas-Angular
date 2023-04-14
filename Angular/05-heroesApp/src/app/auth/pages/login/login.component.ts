import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router,
              private autorizacion: AuthService){}
  
  login(){
    /* Método para iniciar sesión.
    Para poder hacerlo debe realizar lo siguiente:
      - ir al backend
      - usuario (dado por el servicio)
      */
    this.autorizacion.login()
      .subscribe( resp => {
        console.log(resp);

        if(resp.id) {
           this.router.navigate(['./heroes']);
        }
      });

   

  }

}
