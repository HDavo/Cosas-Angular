import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiaGRhdiIsImEiOiJjbGdubGRuMjcwZ3B3M2VvZWZvbnpqOXNjIn0.44VYqWnmnjv8384Hk3kHSQ';



if(!navigator.geolocation){
  alert('Navegador sin permiso de localización.');
  throw new Error('Nvegador sin permiso de localización'); //esto sale por consola
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
