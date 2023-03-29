import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void { //se dispara una sola vez al lanzar el componente
    
    this.debouncer //este código realiza la acción de esperar a hacer el subscribe hasta que dejen de emitirse valores por el tiempo indicado
      .pipe(
        debounceTime(300)) //dentro de los paréntesis se pone el tiempo antes de emitir el siguiente valor
        .subscribe( valor => {
          // console.log('debouncer:', valor);
          this.onDebounce.emit(valor); //emitimos del valor una vez dejen de introducirse datos
      });
    
    
  }

  buscar(){
    this.OnEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
    

  }
}
