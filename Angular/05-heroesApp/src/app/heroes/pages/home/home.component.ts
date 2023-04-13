import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
    mat-icon {
      vertical-align:middle;
    }

    .a {
      padding-top:8px;
      vertical-align:middle;
      padding-left:10px;
    }
  `
  ]
})
export class HomeComponent {

}
