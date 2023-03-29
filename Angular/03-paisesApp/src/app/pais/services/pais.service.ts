import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1' //sirve de base para la llamada a la API y para poner los params

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`; 
    /* return this.http.get(url)
      .pipe( 
        catchError(fallo => of([])) //captura del error con devolución de un elemento
      ); */
    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino: string): Observable<Country[]>{
    const urlCapital = `${this.apiUrl}/capital/${termino}`;
    
    return this.http.get<Country[]>(urlCapital);
  }

  getPaisPorCodigo(id: string): Observable<Country[]>{
    const urlCodigo = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<Country[]>(urlCodigo);
  }
}
