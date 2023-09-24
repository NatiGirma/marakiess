import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { SalaryComponent } from './salary/salary.component';
import { FooterComponent } from './footer/footer.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    PersonalInfoComponent,
    LeaveRequestsComponent,
    SalaryComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AuthModule,
    NgbNavModule,
    FormsModule
  ]
})
export class EmployeeModule { }
