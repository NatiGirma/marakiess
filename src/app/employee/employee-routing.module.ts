import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {
    path: "auth", loadChildren: () => import('src/app/employee/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "personal-information", component: PersonalInfoComponent
  },
  {
    path: "leave-requests", component: LeaveRequestsComponent
  },
  {
    path: "salary", component: SalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
