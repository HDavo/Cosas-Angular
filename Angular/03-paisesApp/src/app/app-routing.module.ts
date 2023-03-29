import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";


import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Route [] = [
    {
        path: '', //indica el index y el elemento que queremos mostrar en el index
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {   //este tipo de ruta hace requiramos el pais y luego el id viene dado de manera independiente pero siempre fija la primera parte de la ruta y además requiere el segundo elemento
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {   //ruta de excepción, en caso de que vaya a una ruta que no exista. Podría usarse para un 404
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes), //este módulo hace la configuración de nuestras
    ],
    exports: [
        RouterModule
    ]
})

// RouterModule debe ir siempre dentro de los imports y de los exports para poder ser usado en el resto de la aplicación
export class AppRoutingModule {}