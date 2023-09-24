import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from "@angular/forms"
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    EmployeesComponent,
    LeaveRequestsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule,
    NgbNavModule,
    FormsModule
  ]
})
export class AdminModule { }
