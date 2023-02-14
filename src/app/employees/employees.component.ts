import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) {}

  employees?: any;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe(
      (data) => {
        this.employees = data
        setTimeout(() => {
          $('#employees').DataTable();
        }, 100);
      }
    )
  }

}
