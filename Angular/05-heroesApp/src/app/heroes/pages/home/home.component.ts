import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
    mat-icon {
      vertical-align:middle;
    }

    .a {
      padding-top:8px;
      vertical-align:middle;
      padding-left:10px;
    }
  `
  ]
})
export class HomeComponent {

  get auth(){
    return this.servicioAuth.autorizacion;
  }

  // auth!: Auth;

  constructor( private router: Router,
               private servicioAuth: AuthService ){}

  logout(){
    this.router.navigate(['./auth']);
  }
}
