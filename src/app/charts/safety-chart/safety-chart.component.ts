import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-safety-chart',
  templateUrl: './safety-chart.component.html',
  styleUrls: ['./safety-chart.component.css']
})
export class SafetyChartComponent {
  @Input() barChartLabels : any;
  @Input() barChartData : ChartDataset[] | undefined;

  barChartOptions: ChartOptions = {
    responsive: true,
  }
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartPlugins = [];
}
