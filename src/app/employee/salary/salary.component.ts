import { Component } from '@angular/core';
import employeeData from "../../../../employee-data.json"

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  payments = employeeData.payrolls
}
