import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';

const routes: Routes = [
  {
    path: "auth", loadChildren: () => import('src/app/admin/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "employees", component: EmployeesComponent
  },
  {
    path: "leave-requests", component: LeaveRequestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
