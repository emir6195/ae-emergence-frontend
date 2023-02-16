import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-sms-chart',
  templateUrl: './sms-chart.component.html',
  styleUrls: ['./sms-chart.component.css']
})
export class SmsChartComponent {

  @Input() barChartLabels : any;
  @Input() barChartData : ChartDataset[] | undefined;

  barChartOptions: ChartOptions = {
    responsive: true,
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

}