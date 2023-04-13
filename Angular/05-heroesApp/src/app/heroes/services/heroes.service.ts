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

  constructor( private htpp: HttpClient ) {}

  getHeroes(): Observable<Heroe[]>{
    return this.htpp.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id: string ):Observable<Heroe>{
    return this.htpp.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
}
