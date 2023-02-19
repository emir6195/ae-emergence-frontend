import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModalComponent } from '../modals/employee-modal/employee-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { ImportEmployeesComponent } from '../modals/import-employees/import-employees.component';
import { Dayjs } from 'dayjs' ;
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public router: Router, public dialog: MatDialog, private sharedService: SharedService) {
    this.selected = {
      start : dayjs(new Date().getTime() - (1000 * 60 * 60 * 24 * 6)),
      end : dayjs(new Date().getTime()),
    }
  }

  downloadUrl: string = 'http://127.0.0.1:3000/download-employees';
  selected: { start: Dayjs; end: Dayjs; };
  ranges: any = {
    'Today': [dayjs(), dayjs()],
    'Yesterday': [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(6, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')],
    'Last Month': [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')]
  }
  cities: any = [
    {
      name: "İstanbul",
      selected: false,
      type:"city"
    },
    {
      name: "Ankara",
      selected: false,
      type:"city"
    }
  ];
  districts: any = [
    {
      name: "Maltepe",
      selected: false,
      type:"district"
    },
    {
      name: "Şişli",
      selected: false,
      type:"district"
    }
  ];
  selectedCities = [];

  ngOnInit() {
    
  }

  setCity(completed: boolean, index: number) {
    this.cities[index].selected = completed;
  }

  setDistrict(completed: boolean, index: number) {
    this.districts[index].selected = completed;
  }

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
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.triggerRefreshEmployees();
    });
  }

  triggerRefreshEmployees() {
    this.sharedService.refreshEmployees();
  }

  triggerFilterEmployees(filter:string) {
    this.sharedService.filterEmployees(filter);
  }

  triggerRefreshDate(daterange:string) {
    this.sharedService.refreshDate(daterange);
  }

  applyFilter() {
    let filteredCities = this.cities.filter((el: { selected: boolean; }) => el.selected == true);
    let filteredDistricts = this.districts.filter((el: { selected: boolean; }) => el.selected == true);
    let filter = filteredCities.concat(filteredDistricts);
    this.triggerFilterEmployees(filter);
  }

  choosedDate() {
    var start = this.selected?.start.toISOString().split('T')[0];
    var end = this.selected?.end.toISOString().split('T')[0];
    this.triggerRefreshDate(start + ',' + end);
  }

}
