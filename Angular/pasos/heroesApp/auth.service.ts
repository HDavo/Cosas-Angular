//versión en la que no se usa of para resolver el observable, solamente se controla con boolean

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



import { environment } from 'src/environments/environment.development';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _autorizacion: Auth | undefined;

  get autorizacion(): Auth{
    return {...this._autorizacion!};
  }

  constructor( private peticion: HttpClient) { } //para poder hacer peticiones


  verificaAutenticacion():Observable<boolean> | boolean{ //esto nos puede devolver un observable, que debemos resolver o bien un boolean
    if(!localStorage.getItem('token')){
      return false;
    } //TODO: también podría hacer usando of para resolver los boolean


    return this.peticion.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map( auth => {
          console.log('map', auth);
          return true;
        }) //transforma y devuelve un nuevo valor con esa estructura
      )
  }

  login(){
    return this.peticion.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( auth => this._autorizacion = auth), //verificaciones de autenticación
              tap( auth => localStorage.setItem('token', auth.id)), //guardamos el id del usuario para poder tener una sesión persistente y para usarlo como token de acceso dentro del localStorage
            );
  }

  logout(){
    this._autorizacion = undefined;
  }
}
