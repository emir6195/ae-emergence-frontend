import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomingSmsComponent } from './incoming-sms/incoming-sms.component';
import { OutgoingSmsComponent } from './outgoing-sms/outgoing-sms.component';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { DataTablesModule } from 'angular-datatables';
import {  HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { EmployeeModalComponent } from './modals/employee-modal/employee-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportEmployeesComponent } from './modals/import-employees/import-employees.component';
import { SmsChartComponent } from './charts/sms-chart/sms-chart.component';
import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { PeopleSafeComponent } from './charts/people-safe/people-safe.component';
import { PeopleUnsafeComponent } from './charts/people-unsafe/people-unsafe.component';
import { SafetyChartComponent } from './charts/safety-chart/safety-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmployeesComponent,
    NavbarComponent,
    DashboardComponent,
    IncomingSmsComponent,
    OutgoingSmsComponent,
    SendSmsComponent,
    FooterComponent,
    EmployeeModalComponent,
    ImportEmployeesComponent,
    SmsChartComponent,
    PeopleSafeComponent,
    PeopleUnsafeComponent,
    SafetyChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    NgChartsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
