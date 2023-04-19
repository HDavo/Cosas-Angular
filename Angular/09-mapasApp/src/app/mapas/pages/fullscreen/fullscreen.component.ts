import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [
    `
      #mapa{
        width: 100%;
        height: 100%;
      }
    `
    
  ]
})
export class FullscreenComponent implements OnInit{


  ngOnInit(): void {
    
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -3.7503986001651857, 40.39743386973446 ],
      zoom: 18
    });
  }
  
}
