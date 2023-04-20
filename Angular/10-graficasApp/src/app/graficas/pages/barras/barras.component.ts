import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Perros', backgroundColor: '#790494', hoverBackgroundColor: '#790494' },
      { data: [ 28, 35, 40, 19, 1, 27, 2 ], label: 'Gatos', backgroundColor: '#E0A511', hoverBackgroundColor: '#E0A511'},
      { data: [ 8, 45, 21, 23, 12, 2, 50 ], label: 'Hámsters', backgroundColor: '#28E0A1', hoverBackgroundColor: '#28E0A1'},
    ]
  };


  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
