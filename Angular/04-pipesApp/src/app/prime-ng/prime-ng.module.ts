//módulo para agrupar los módulos usados de primeNg

import { NgModule } from '@angular/core';

//Primeng (de terceros)
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ToolbarModule
  ],
 /*  Este tipo de módulos creados de forma expresa para solamente centralizar elementos de terceros, 
  no necesitan de imports ya que no van a usarlo,
  simplemente agrupan los módulos usados y los exportan para su uso en el resto de la aplicación. */
})
export class PrimeNgModule { }
