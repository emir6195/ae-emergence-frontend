import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { IncomingSmsComponent } from './incoming-sms/incoming-sms.component';
import { OutgoingSmsComponent } from './outgoing-sms/outgoing-sms.component';
import { SendSmsComponent } from './send-sms/send-sms.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'incoming-sms',
    component: IncomingSmsComponent
  },
  {
    path: 'outgoing-sms',
    component: OutgoingSmsComponent
  },
  {
    path: 'send-sms',
    component: SendSmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
