import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router: Router, public dialog: MatDialog) { }

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
    });
  }
}
