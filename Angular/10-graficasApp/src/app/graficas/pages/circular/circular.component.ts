import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styles: [
  ]
})
export class CircularComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Perros', 'Gatos', 'Hurones','Otros' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [ 
      {
        data: [ 24, 2, 45, 29 ],
        backgroundColor: [
          '#1B9481',
          '#E028E0',
          '#12E0C0',
          '#E0CC81',
          '#947504'
        ]
      },
    ],
    

    //original. Cada uno de los objetos es un nivel dentro de la gráfica
    /* datasets: [ 
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ] */
  };
  public doughnutChartType: ChartType = 'doughnut';

  
}
