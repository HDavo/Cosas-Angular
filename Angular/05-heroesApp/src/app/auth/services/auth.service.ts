import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

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

  login(){
    return this.peticion.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( auth => this._autorizacion = auth)
            );
  }
}
