import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';

import { PaisCodigo, PaisSm } from '../interfaces/paises.interface';

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

  getPaisPorCodigo(codigo: string): Observable <PaisCodigo []| []> { //se pueden usar los diferentes códigos cca

    if(!codigo){ //para el caso de que no exista el código
      return of([])
    }
    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.peticion.get<PaisCodigo[]>(url);
  }


  getPaisPorCodigoSm(codigo: string): Observable <PaisSm> { //se pueden usar los diferentes códigos cca    
    const url = `${this.baseUrl}/alpha/${codigo}?fields=cca3&fields=name`;
    return this.peticion.get<PaisSm>(url);
  }

  getPaisesPorCodigos(fronteras: string[]): Observable<PaisSm[]>{
    if(!fronteras){
      return of([]);
    }

    const solicitudes: Observable<PaisSm>[] = [];

    fronteras.forEach( codigo => {
      const solicitud = this.getPaisPorCodigoSm(codigo);

      solicitudes.push( solicitud );
    });

    return combineLatest( solicitudes );
  }
}
