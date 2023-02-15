import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeesService: EmployeesService,
  ) { }

  type?: string;

  ngOnInit(): void {
    if (this.data.name != null) {
      this.type = 'update'
    } else {
      this.type = 'add'
    }
  }

  submit() {
    if (this.type == 'add') {
      this.employeesService.addEmployees(this.data).subscribe(response => {
        console.log(response);
      });
    } else if (this.type == 'update') {
      this.employeesService.updateEmployees(this.data).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('type is required for submit!');
    }
  }

}
