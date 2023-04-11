import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//para poder usar primeNg (módulo personalizado)
// import { PrimeNgModule } from './prime-ng/prime-ng.module'; 
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
/* Bastaría con poner el SharedModule ya que el contenido de PrimeNgModule
se incorpora en este módulo y AppComponent.component.html solo muestra
el módulo y nada de contenido directo de primeNg */


//Cambiar el locale (idioma) de la app + ejemplo de otro idioma adicional 

import localeEs from '@angular/common/locales/es-EC'; //dentro del import podemos poner el nombre que queramos
import localeFr from '@angular/common/locales/fr'; //para añadir otro idioma
import { registerLocaleData } from '@angular/common'; //siempre debemos importar esta función

registerLocaleData( localeEs ); //de esta manera asignamos el import creado a la función para asignarle así el idioma deseado
registerLocaleData( localeFr ); //asignando otro idioma

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    // PrimeNgModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
