import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { OutgoingSmsModal } from '../dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://127.0.0.1:3000';

  getStats(begin_date?: string, end_date?: string ) {
    return this.http.post<RootObject>(this.baseUrl + '/api/stats', {
      begin_date : begin_date,
      end_date: end_date
    })
  }

  getCitiesDistricts() {
    return this.http.get<CitiesDistrictsModal>(this.baseUrl + '/api/cities-districts');
  }

}

export interface RootObject {
  countOfEmployees: number;
  date_labels: string[];
  countOfIncomingMessages: number;
  countOfOutgoingMessages: number;
  dataset: ChartDataset[];
  outgoingMessages : OutgoingSmsModal[];
}

export interface CitiesDistrictsModal {
  cities: string[];
  districts: string[];
}