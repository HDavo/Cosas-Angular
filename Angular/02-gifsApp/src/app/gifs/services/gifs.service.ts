import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})



export class GifsService {

  private apiKey: string = 'JSy9TgGsN9InForJt5TmeJKwVSEq3wx4';

  private _historial: string[] = [];

  public resultados: Gif [] = [];

  get historial(){
    
    return [...this._historial]; //ruptura de la referencia
  }

  //inyección de httpClient
  constructor (private http: HttpClient ) {}
  


  buscarGifs( query: string ) {
    
    query = query.trim().toLowerCase();

    if (!this._historial.includes( query)) { //para evitar elementos repetidos dentro de la lista mostrada
      this._historial.unshift( query );
      //se corta y luego se inserta
      this._historial = this._historial.splice(0,10); //limitación del número de elementos a mostrar
    }

    //peticion de httpClient a la api
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${ query } &limit=10`)
      .subscribe( (respuesta) => { //para ponerle un tipo a la respuesta dada por la api y poder aplicarle métodos
        console.log(respuesta.data);
        this.resultados = respuesta.data;

        //ejemplo de uso de métodos después del tipado
        // respuesta.data[0].images.downsized_medium.url
      });
    
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=JSy9TgGsN9InForJt5TmeJKwVSEq3wx4&q=kazuya')
    

    console.log(this._historial);
  }
}
