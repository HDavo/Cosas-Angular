import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1' //sirve de base para la llamada a la API y para poner los params

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }
  /* Las peticiones se han optimizado para devolver ciertos campos de la API
  con el fin de minimizar el tamaño de la petición en búsquedas donde no se necesitan todos los campos
  devueltos en el json.
  Se ha hecho definiendo una serie de campos dentro de una variable e implementado esos campos usandolos
  como params en las búsquedas (en este caso se usan los mismos params para varias búsquedas pero pueden definirse propios para cada una de ellas).
   
    //búsqueda con params
    // return this.http.get<Country[]>(urlCodigo, {params: this.httpParams});

    //busqueda sin params
    //return this.http.get<Country[]>(url);
  */

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
    
    return this.http.get<Country[]>(urlCapital, {params: this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<Country[]>{
    const urlCodigo = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<Country[]>(urlCodigo);
  }

  buscarRegion(region: string): Observable<Country[]>{
    
    
    const urlRegion = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(urlRegion, { params: this.httpParams})
      .pipe(
        tap(console.log)
      )
  }
}
