import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 2%;
      }
    `
  
  ]
})
export class AgregarComponent implements OnInit{

  editores = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {              
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  }

  constructor( private servicioHeroes: HeroesService,
               private leerRuta: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private confirmacion: MatDialog){}

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
      //para que esto solo lo ejecute al estar dentro de la pantalla de editar y no en añadir (sin esto nos muestra un error por ser undefined el id (al no existir el heroe))
      this.leerRuta.params
      .pipe(
        switchMap( ( {id}) => this.servicioHeroes.getHeroePorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe);
    }

    
  }

  guardar(){ //este método se usa para editar y para guardar registros. También puede hacerse desde el servicio

    if(this.heroe.superhero.trim().length === 0){ //no nos deja guardar un nuevo registro sin tener algo en el nombre
      return;
    }
    // console.log(this.heroe);

    if(this.heroe.id){
      //Actualiza un registro anterior, si tiene id es que ya lo tenemos dentro de nuestra bbdd
      this.servicioHeroes.actualizarHeroe(this.heroe)
        .subscribe( heroe => this.mostrarSnackBar('Registro actualizado'));
    }else{
      //Crear un nuevo registro
      this.servicioHeroes.agregarHeroe(this.heroe) //con esto hacemos la inserción dentro de la bbdd
      .subscribe( heroe => {
        // console.log('Respuesta', resp);
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('Registro creado')
      });
    }
  }

  borrarHeroe(){

    const cuadro = this.confirmacion.open( ConfirmarComponent, {
      width: '250px',
      data: this.heroe //En el caso de que sepamos que vamos a modificar el objeto, lo podemos mandar asi {... this.heroe}
    });


    cuadro.afterClosed().subscribe(
      (resultado) => {
        // console.log(resultado);
        if(resultado){
          this.servicioHeroes.borrarHeroe( this.heroe.id! )
            .subscribe( resp => {
            this.router.navigate(['/heroes']); //TODO: revisar esta ruta con el proyecto final. Redirección mal hecha
          });
        }
      }
    )

    
  }

  mostrarSnackBar(mensaje: string):void{
    this.snackBar.open( mensaje, 'Cerrar', {
      duration: 3000
    })
  }
    
}
