import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        width: 100%;
        height: 100%;
      }

      .row{
        background-color: white;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements OnInit{
  ngOnInit(): void {
    var map = new mapboxgl.Map({
     container: 'mapa',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: [ -3.7503986001651857, 40.39743386973446 ],
     zoom: 12
    });
 }
}
