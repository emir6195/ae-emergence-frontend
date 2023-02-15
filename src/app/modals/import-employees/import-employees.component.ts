import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.css']
})
export class ImportEmployeesComponent {
  constructor(
    public dialogRef: MatDialogRef<EmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeesService: EmployeesService,
  ) { }

  fileToUpload: File | null = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submit() {
    if (this.fileToUpload) {
      this.employeesService.importEmployees(this.fileToUpload).subscribe(data => {
        console.log(data);
      })
    }
  }
}
