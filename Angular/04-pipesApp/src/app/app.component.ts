import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = "PePe";
  valor: number = 1000;
  obbj = {
    nombre: 'Juan Antonio'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obbj);
  }
}
