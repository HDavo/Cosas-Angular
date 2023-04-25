import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true //esto permite que el manejo de las rutas que no estén definidas de manera explícita dentro del backend.
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
