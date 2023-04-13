import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';


const routesHeroes: Routes = [
  {
    path: '', //ruta principal de este elemento
    
    component: HomeComponent,

    children: [ //subrutas
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path:':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild( routesHeroes) //definimos estas rutas como las hijas de este módulo
  ],
  exports: [
    RouterModule //permitimos que las rutas definidas puedan usarse desde fuera del módulo
  ]
})
export class HeroesRoutingModule { }
