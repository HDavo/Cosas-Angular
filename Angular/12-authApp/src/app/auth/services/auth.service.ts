import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.development';
import { Observable, catchError, of, tap, map } from 'rxjs';

import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};
  }
  
  constructor(private peticionHttp: HttpClient) { }

  registro(name: string, email: string, password: string){

    const url = `${this.baseUrl}/new`;
    const body = {name, email, password}; //el orden en el body no importa si está puesto como en el backend de forma correcta

    return this.peticionHttp.post<AuthResponse>(url, body)
      .pipe( //con esto nos aseguramos que antes de llegar a la pantalla del login tenemos la información ya establecida
        tap( ({ok, token}) => {
          // console.log(resp);
          if(ok){
            localStorage.setItem('token', token!);
          }
        }),
        map(resp => resp.ok),
        catchError( err => of(err.error.mensaje))
      );
  }

  login(email: string, password: string){

    const url = `${this.baseUrl}/auth`;
    const body = {email, password};

    return this.peticionHttp.post<AuthResponse>(url, body)
      .pipe( //con esto nos aseguramos que antes de llegar a la pantalla del login tenemos la información ya establecida
        tap( resp => {
          // console.log(resp);
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError( err => of(err.error.mensaje))
      );
  }


  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token')! || '');

    return this.peticionHttp.get<AuthResponse>(url, { headers })
      .pipe(
        map( resp => {
          console.log(resp.token);
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }

          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }

  logout(){
    localStorage.clear(); //esto borra todo del localstorage de nuestra aplicación del usuario
  }
}
