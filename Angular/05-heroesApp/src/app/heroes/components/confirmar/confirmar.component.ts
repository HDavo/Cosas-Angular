import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit{

  //la primera inyección hace que podamos cerrar el cuadro de dialogo
  constructor( private referencia: MatDialogRef<ConfirmarComponent>, 
               @Inject(MAT_DIALOG_DATA) public data: Heroe,){}
            
  ngOnInit(): void{
    console.log(this.data);
  }
               
  borrar(){
    this.referencia.close(true);
  }

  cerrar(){ //con esto cerramos el cuadro de dialogo, también sirve si se pulsa fuera
    this.referencia.close();
  }
}
