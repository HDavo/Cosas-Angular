import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import { Observable} from 'rxjs';
import {  tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//TODO: canload y canactivate son deprecated. Mirar con qué se han sustituido 

export class AuthGuard implements CanLoad, CanActivate {

  constructor( private servicioAutorizacion: AuthService,
               private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      return this.servicioAutorizacion.verificaAutenticacion()
        .pipe(
          tap( tienePermiso => {
            if(!tienePermiso) {
              this.router.navigate(['./auth/login']);
            }
          })
        );


      /* if(this.servicioAutorizacion.autorizacion.id){ //con esto solo permitimos el acceso a las rutas de heroes
        return true;
      }

      console.log('Acceso restringido usando AuthGuard - CanActivate');
    return false; */

  }


  //canLoad solamente previene la carga, no sirve si el usuario ya lo tenia en memoria anteriormente y luego restringimos el acceso
  canLoad( //esto es lo que hace que se pueda acceder a las rutas
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {
     
      return this.servicioAutorizacion.verificaAutenticacion()
        .pipe(
          tap( tienePermiso => {
            if(!tienePermiso) {
              this.router.navigate(['./auth/login']);
            }
          })
        );

      // return this.servicioAutorizacion.verificaAutenticacion();

      //ejemplo sencillo de la funcionalidad que permite canload
      /* if(this.servicioAutorizacion.autorizacion.id){ //con esto solo permitimos el acceso a las rutas de heroes
        return true;
      }

      console.log('Acceso restringido usando AuthGuard -- CanLoad');
    return false; //true permite el acceso o carga de las rutas protegidas, con false no puede acceder
 */
  }
}
