import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})



export class GifsService {

  private apiKey: string = 'JSy9TgGsN9InForJt5TmeJKwVSEq3wx4';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif [] = [];

  get historial(){
    
    return [...this._historial]; //ruptura de la referencia
  }

  //inyección de httpClient
  constructor (private http: HttpClient ) {

    //por ser un servicio solo se carga una vez, por lo que es el mejor lugar donde iniciar el localstorage

    //la creación puede hacerse de diversas maneras pero siempre debemos asegurarnos que indicamos con !

    //forma de una sola línea
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    
    /* //forma con condicional y varias líneas
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!); //esto puede devolver un null, por lo que con ! indicamos que aseguramos que devuelve algo a ts
    } */

    //para poder mostrar los resultados de la última búsqueda usando el localstorage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }
  


  buscarGifs( query: string ) {
    
    query = query.trim().toLowerCase();

    if (!this._historial.includes( query)) { //para evitar elementos repetidos dentro de la lista mostrada
      this._historial.unshift( query );
      //se corta y luego se inserta
      this._historial = this._historial.splice(0,10); //limitación del número de elementos a mostrar

      //para grabar en el localstorage
      localStorage.setItem('historial', JSON.stringify(this._historial) );
    }

    const params = new HttpParams().set('api_key', this.apiKey).set('limit','10').set('q', query);

    console.log(params)

    //---------------Petición usando params------------------------------------------

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( (respuesta) => {
        // console.log(respuesta.data);
        this.resultados = respuesta.data;

        localStorage.setItem('resultados', JSON.stringify( this.resultados));
        //ejemplo de uso de métodos después del tipado
        // respuesta.data[0].images.downsized_medium.url
      });


    /* //peticion de httpClient a la api (sin params)
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${ query } &limit=10`)
      .subscribe( (respuesta) => { //para ponerle un tipo a la respuesta dada por la api y poder aplicarle métodos
        console.log(respuesta.data);
        this.resultados = respuesta.data;

        localStorage.setItem('resultados', JSON.stringify( this.resultados));
        //ejemplo de uso de métodos después del tipado
        // respuesta.data[0].images.downsized_medium.url
      }); */
      
    // console.log(this._historial);
  }
}
