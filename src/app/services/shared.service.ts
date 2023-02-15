import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private source = new BehaviorSubject('refresh_employee');
  obsSource = this.source.asObservable();

  constructor() { }

  refreshEmployees() {
    this.source.next('refresh_employee');
  }

}
