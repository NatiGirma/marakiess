import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [{
  path: "employee", loadChildren: () => import('src/app/employee/employee.module').then(m => m.EmployeeModule),
}, 
{
  path: "admin", loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule),
}
,{
  path: "", component: StartPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
