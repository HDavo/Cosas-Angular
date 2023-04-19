import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements
             OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked, OnDestroy{

  nombre: string = 'Pepe';
  segundos: number = 0;
  suscripcionTemporizador!: Subscription;

  constructor(){
    console.log('constructor');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.suscripcionTemporizador.unsubscribe();
    console.log('Temporizador parado');
  }

  ngOnInit(): void{
    console.log('ngOnInit');
    
    this.suscripcionTemporizador = interval(1000).subscribe( i => {
      // console.log(i);
      this.segundos = i;
    })
  }

  guardar(){

  }
  

}
