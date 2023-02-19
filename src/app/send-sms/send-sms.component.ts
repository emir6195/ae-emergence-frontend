import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent implements OnInit {

  constructor(private employeesService: EmployeesService, private sharedService : SharedService) {}

  filter: any;
  chips : any;
  employees : any;

  ngOnInit() {
    this.getFilteredEmployees(this.filter);
    this.sharedService.filterEmployeeObsSource.subscribe(filter => {
      this.filter = filter;
      this.chips = this.filter.map((el: { name: any; }) => el.name);
      this.getFilteredEmployees(this.filter);
    });
  }

  getFilteredEmployees(filter: string) {
    this.employeesService.getFilteredEmployees(filter).subscribe(
      (data) => {
        this.employees = data
        setTimeout(() => {
          $('#employees').DataTable();
        }, 100);
      }
    )
  }
}
