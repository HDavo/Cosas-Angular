import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    // console.log(heroe);

    if(!heroe.id && !heroe.alt_img){ //excepción para que el pipe si no hay imagen muestre una imagen genérica
      return 'assets/no-image.png';
    }else if(heroe.alt_img){ //en el caso de que exista alt_img nos devuelve la imagen y se muestra
      return heroe.alt_img;
    }else{
      return `assets/heroes/${ heroe.id}.jpg`;
    }

     
  }

}
