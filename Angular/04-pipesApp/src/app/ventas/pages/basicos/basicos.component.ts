import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'Pepe';
  nombreUpper: string = 'MANOLO';
  nombreCompleto: string = 'PePE PeREz';

  fecha: Date = new Date(); //siempre la fecha del momento de ejecución
}
