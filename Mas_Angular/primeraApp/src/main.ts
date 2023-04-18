import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //define el módulo raíz, que es el módulo encargado de cargar la aplicación
  .catch(err => console.error(err));
