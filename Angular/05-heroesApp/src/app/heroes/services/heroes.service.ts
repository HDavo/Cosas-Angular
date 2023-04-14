import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root' //al tener root no es necesario ponerlo dentro de providers, ya es global
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) {}

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id: string ):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias( termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${ termino }&_limit=6`);
    // http://localhost:3000/heroes?q=a&_limit=6
  }

  agregarHeroe( nuevo: Heroe): Observable<Heroe>{ //para hacer inserciones dentro de la bbdd
    return this.http.post<Heroe>(`${ this.baseUrl}/heroes`, nuevo);
  }

  actualizarHeroe( existente: Heroe): Observable<Heroe>{ //para hacer updates dentro de la bbdd
    return this.http.put<Heroe>(`${ this.baseUrl}/heroes/${existente.id}`, existente);
  }

  /*
  CRUD
  Post: crear
  put/patch: update
  get: obtener información
  delete: borrar información
  */

  borrarHeroe( id: string): Observable<any>{ //para hacer updates dentro de la bbdd
    return this.http.delete<Heroe>(`${ this.baseUrl}/heroes/${id}`);
  }
}
