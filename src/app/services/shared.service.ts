import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private source = new BehaviorSubject('refresh_employee');
  obsSource = this.source.asObservable();

  private filterEmployeeSource = new BehaviorSubject('filter_employee');
  filterEmployeeObsSource = this.filterEmployeeSource.asObservable();

  private dateSource = new BehaviorSubject('start');
  dateObsSource = this.dateSource.asObservable();

  constructor() { }

  refreshEmployees() {
    this.source.next('refresh_employee');
  }

  filterEmployees(filter: string) {
    this.filterEmployeeSource.next(filter);
  }

  refreshDate(date:any) {
    this.dateSource.next(date);
  }

}
