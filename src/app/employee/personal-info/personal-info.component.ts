import { Component } from '@angular/core';
import employeeData from "../../../../employee-data.json"

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {

  first_name: string = employeeData.first_name
  last_name: string = employeeData.last_name
  work_email: string = employeeData.work_email
  work_phone: string = employeeData.work_phone
  work_mobile: string = employeeData.work_mobile
  title: string = employeeData.title

  department: string = employeeData.department
  job_position: string = employeeData.job_position
  job_category: string = employeeData.job_category
  qualification_level: string = employeeData.qualification_level
  qualification_description: string = employeeData.qualification_description
  university: string = employeeData.university

  gender: string = employeeData.gender
  dob: string = employeeData.dob
  nationality: string = employeeData.nationality
  address: string = employeeData.address
  private_email: string = employeeData.private_email
  private_phone: string = employeeData.private_phone
  postal_address: string = employeeData.postal_address
  marital_status: string = employeeData.marital_status
  emergency_phone: string = employeeData.emergency_phone
  emergency_email: string = employeeData.emergency_email

  insurance_company: string = employeeData.insurance_company
  insurance_id: string = employeeData.insurance_id
  from: string = employeeData.from
  to: string = employeeData.to

  active = 1;

}
