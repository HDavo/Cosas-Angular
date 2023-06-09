import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routesAuth: Routes = [
  {
    path: '', //ruta principal de este elemento
    children: [ //subrutas  (auth/...)
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]    
  }
]



@NgModule({
  
  imports: [
    RouterModule.forChild( routesAuth )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
