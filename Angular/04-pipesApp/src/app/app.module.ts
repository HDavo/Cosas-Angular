import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//para poder usar primeNg (módulo personalizado)
// import { PrimeNgModule } from './prime-ng/prime-ng.module'; 
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
/* Bastaría con poner el SharedModule ya que el contenido de PrimeNgModule
se incorpora en este módulo y AppComponent.component.html solo muestra
el módulo y nada de contenido directo de primeNg */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    
    // PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
