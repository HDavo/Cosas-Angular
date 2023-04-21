import { NgModule } from '@angular/core';

import { MensajeErrorDirective } from './directives/mensaje-error.directive';
import { IfPersonalizadoDirective } from './directives/if-personalizado.directive';



@NgModule({
  declarations: [
    MensajeErrorDirective,
    IfPersonalizadoDirective
  ],
  exports:[
    IfPersonalizadoDirective,
    MensajeErrorDirective
  ]
})
export class SharedModule { }
