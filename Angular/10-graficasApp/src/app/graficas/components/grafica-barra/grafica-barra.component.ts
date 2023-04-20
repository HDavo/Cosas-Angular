import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {
  // ===========
  // ### Inputs
  // ===========
 
  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[] | unknown[] | undefined;
  @Input() inputDatasets!: ChartDataset<any, any>[];
 
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  // ================
  // ### propiedades
  // ================
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
 
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true, // para tener la leyenda si o no
      },
    },
 
    indexAxis: 'x',
  };
 
  public barChartType: ChartType = 'bar'; // los tipos de gráfica

 
  // propiedad e mi gráfica -> barCharData
  // -------------------------------------
 
  // ALGUNAS PROPIEDADES INTERESANTES:
  // backgroundColor -> para definir el color de la barra
  // hoverBackgroundColor -> cuando hago click sobre la barra, me sale un color
  public barChartData: ChartData<'bar'> = {
    // ==> REFACTORIZO ESTO UTILIZANDO LOS INPUTS!!
    labels: [],
    datasets: [],
  };
 
  // ================
  // ### constructor
  // ================
  constructor() {
    //console.log(this.horizontal);
  }
 
  // ================
  // ### ngOnInit
  // ================
  ngOnInit(): void {
    //console.log(this.horizontal); // aquí si recibo en un inicio la propiedad cuando se construyen las gráficas
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';  
    }
 
    //console.log(this.inputDatasets); 
    //console.log(this.inputLabels);
 
    this.barChartData.datasets = this.inputDatasets;
    this.barChartData.labels = this.inputLabels;
  }
}


