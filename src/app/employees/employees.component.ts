import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';
import { EmployeesService } from '../services/employees.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesService: EmployeesService, private sharedService: SharedService, public dialog: MatDialog) { }

  employees?: any;

  ngOnInit(): void {
    this.getEmployees();
    // Navbardaki add data üzerinden eleman eklenirse ekranı refresh etmek için buraya event geliyor.
    this.sharedService.obsSource.subscribe(message => {
      this.getEmployees();
    })
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

  deleteEmployees(_id: string) {
    this.employeesService.deleteEmployees(_id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  openEditEmployeeDialog(employee: any): void {
    const dialogRef = this.dialog.open(EmployeeModalComponent, {
      width: '50vh',
      data: employee,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

