import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  // regiones: string[] = ['EU ','CARICOM ','EFTA' ,'PA' ,'AU' ,'USAN' ,'EEU' ,'AL' ,'ASEAN' ,'CAIS' ,'CEFTA' ,'NAFTA' ,'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private regionService: PaisService){}


  getClaseCSS(region: string): string{
    return ((region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' )
  }

  activarRegion(region: string){
    
    if ( region === this.regionActiva) { return }  //para optimizar, si pulsa dos veces sobre el mismo botón no hace nada
    this.regionActiva = region;
    this.paises = []; //para optimizar

    this.regionService.buscarRegion(region)
      .subscribe( paises => {
       this.paises = paises;
      });
  }

  
}
