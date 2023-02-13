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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
