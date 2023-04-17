import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth', //ruta del componente hijo
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    /*cuando alguien entre en la ruta,
    mediante esta promesa cargamos las rutas contenidas dentro del fichero especificado.
    En el momento en que ese módulo se cargue nos devolverá ese módulo*/
    
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad: [AuthGuard], //con esto hacemos que el acceso a las rutas de este modulo esté restringido
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
