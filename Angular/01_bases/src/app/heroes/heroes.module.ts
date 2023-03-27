import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //componentes a usar dentro del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //cosas que son visibles fuera del módulo
        ListadoComponent
    ],
    imports: [ //solo van módulos dentro de esta parte
        CommonModule // se usa para poder usar directivas personalizadas de angular (*ng...)
    ]
})

export class HeroesModule {

}

