import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { ImportEmployeesComponent } from '../modals/import-employees/import-employees.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router: Router, public dialog: MatDialog, private sharedService : SharedService) { }

  downloadUrl : string = 'http://127.0.0.1:3000/download-employees';

  logout() {
    console.log('logout');
  };

  openAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(EmployeeModalComponent, {
      width: '50vh',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.triggerRefreshEmployees();
    });
  }

  openImportEmployeeDialog(): void {
    const dialogRef = this.dialog.open(ImportEmployeesComponent, {
      width: '70vh',
      data : {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.triggerRefreshEmployees();
    });
  }

  triggerRefreshEmployees() {
    this.sharedService.refreshEmployees();
  } 

}
