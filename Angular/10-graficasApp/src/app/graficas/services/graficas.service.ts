import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  public BaseUrl: string = 'http://localhost:3000/grafica';
  constructor( private peticion: HttpClient) { }

  getUsuarios(){
    return this.peticion.get(this.BaseUrl);
  }

  getUsuariosCircular(){
    return this.getUsuarios()
      .pipe(
        delay(2000),
        map( data => {

          return {
            labels: Object.keys(data),
            datasets: [{ data: Object.values(data) }],
          };
        })
      )
  }
}
