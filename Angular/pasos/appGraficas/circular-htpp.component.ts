import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-circular-htpp',
  templateUrl: './circular-htpp.component.html',
  styles: [
  ]
})
export class CircularHtppComponent implements OnInit{
  
  public doughnutChartLabels: string[] = [ 

  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [ 
      {
        data: [],
        // data: [ 24, 2, 45, 29 ],
        backgroundColor: [
          '#1B9481',
          '#E028E0',
          '#12E0C0',
          '#E0CC81',
          '#947504'
        ]
      },
    ],
  } 

  constructor(private servicioGraficas: GraficasService){}

  
  ngOnInit():void{

    /* this.servicioGraficas.getUsuarios()
      .subscribe( datos => {
        console.log(datos);
      }); */

      this.servicioGraficas.getUsuarios()
        .subscribe( resp => {
          console.log(resp);

          const labels = Object.keys(resp);
          const datos = Object.values(resp);

          this.doughnutChartData={
            labels: Object.keys(resp),
            datasets: [{data: Object.values(resp)}]
          }
        })
  }

  public doughnutChartType: ChartType = 'doughnut';
}
