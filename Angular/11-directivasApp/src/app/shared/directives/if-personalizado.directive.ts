//ejemplo importante para saber como crear y destruir un elemento

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ifPropio]'
})
export class IfPersonalizadoDirective {

  @Input() set ifPropio(condicion: boolean){
    if(condicion){
      this.verContenedor.createEmbeddedView(this.plantillaReferencia);
    }else{
      this.verContenedor.clear();
    }
  }

  constructor(
    private plantillaReferencia: TemplateRef<HTMLElement>,
    private verContenedor: ViewContainerRef
  ) { 
    // console.log('if-propio');
  }



}
