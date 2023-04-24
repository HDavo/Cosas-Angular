import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `
  ]
})
export class DashboardComponent {

  get usuario(){
    return this.servicioAuth.usuario;
  }

  constructor(
    private router: Router,
    private servicioAuth: AuthService){}

  logout(){
    this.router.navigateByUrl('/auth');
    this.servicioAuth.logout();
  }
}
