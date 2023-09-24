import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import adminData from "../../../../admin-data.json"

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  closeResult = '';
  getDismissReason: any;

  employees = adminData.employees

  @Input() first_name: string = "";
  @Input() last_name: string = "";
  @Input() work_phone: string = "";
  @Input() work_email: string = "";
  @Input() department: string = "";
  @Input() nationality: string = "";
  @Input() address: string = "";
  @Input() emergency_phone: string = "";
  @Input() emergency_email: string = "";

  constructor(private modalService: NgbModal, private toastr: ToastrService) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	submitCreateEmployee() {

		if (this.first_name == "") {
			this.toastr.error('First name is not allowed to be empty!');
			return
		}

		if (this.last_name == "") {
			this.toastr.error('Last name is not allowed to be empty!');
			return
		}

		if (this.work_phone == "") {
			this.toastr.error('Work phone is not allowed to be empty!');
			return
		}

		if (this.work_email == "") {
			this.toastr.error('Work email is not allowed to be empty!');
			return
		}

		if (this.department == "") {
			this.toastr.error('Department is not allowed to be empty!');
			return
		}

		if (this.nationality == "") {
			this.toastr.error('Nationality is not allowed to be empty!');
			return
		}

		if (this.address == "") {
			this.toastr.error('Address is not allowed to be empty!');
			return
		}

		if (this.emergency_phone == "") {
			this.toastr.error('Emergency Phone is not allowed to be empty!');
			return
		}

		if (this.emergency_email == "") {
			this.toastr.error('Emergency Email is not allowed to be empty!');
			return
		}
		
		// API Call

		this.toastr.success('Employee Created Successfully!');
		this.modalService.dismissAll();
		return
	}
}
