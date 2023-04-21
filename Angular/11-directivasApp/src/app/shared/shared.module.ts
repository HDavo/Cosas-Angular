import { NgModule } from '@angular/core';

import { MensajeErrorDirective } from './directives/mensaje-error.directive';



@NgModule({
  declarations: [
    MensajeErrorDirective
  ],
  exports:[
    MensajeErrorDirective
  ]
})
export class SharedModule { }
