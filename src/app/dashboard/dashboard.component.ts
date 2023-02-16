import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private statsService: StatsService) {}

  barChartLabels: any;
  barChartData: ChartDataset[] | undefined
  countOfEmployees: any;
  countOfIncomingMessages: any;
  countOfOutgoingMessages: any;

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    this.statsService.getStats().subscribe(data => {
      this.barChartLabels = data.date_labels;
      this.barChartData = data.dataset;
      this.countOfEmployees = data.countOfEmployees;
      this.countOfIncomingMessages = data.countOfIncomingMessages;
      this.countOfOutgoingMessages = data.countOfOutgoingMessages;
    })
  }

  // barChartLabels = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  // barChartData: ChartDataset[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  // ];

}


