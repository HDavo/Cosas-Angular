import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnChanges{
 
  @Input() nombre!: string;

  ngOnChanges(cambios: SimpleChanges): void {
    console.log(cambios);
  }

  
}
