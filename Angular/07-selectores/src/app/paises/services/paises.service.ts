import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSm } from '../interfaces/paises.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v3.1'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe','Oceania'];

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(private peticion: HttpClient) { } //El import se hace en app.module porque necesitamos que sea global

  getPaisesPorRegion(region: string): Observable<PaisSm[]>{

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3&fields=name`;
    return this.peticion.get<PaisSm[]>(url);

  }
}
