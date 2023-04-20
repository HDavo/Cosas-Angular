import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {
  proveedoresData: ChartData<'bar'> = {
    labels: ['2011', '2012', '2013', '2014', '2015'],
    datasets: [
      {
        data: [100, 200, 300, 400, 500],
        label: 'Vendedor A',
      },
      {
        data: [50, 250, 30, 450, 200],
        label: 'Vendedor B',
      },
    ],
  };
 
  // ### propiedad : productoData
  productoData: ChartData<'bar'> = {
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Tablets',
        backgroundColor: '#BE28E0',
      },
    ],
  };

}
