import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import employeeData from "../../../../employee-data.json"


@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent {
  closeResult = '';
  getDismissReason: any;

  leaveRequests = employeeData.leave_requests

  @Input() description: string = "";
  @Input() leave_type: string = "";
  @Input() from: string = "";
  @Input() to: string = "";

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

	submitLeaveRequest() {
		if (this.description == "") {
			this.toastr.error('Description is not allowed to be empty!');
			return
		}

		if (this.leave_type == "") {
			this.toastr.error('Leave type is not allowed to be empty!');
			return
		}

		if (this.from == "") {
			this.toastr.error('From is not allowed to be empty!');
			return
		}

		if (this.to == "") {
			this.toastr.error('To is not allowed to be empty!');
			return
		}

		// API Call

		this.toastr.success('Leave Request Submitted Successfully!');
		this.modalService.dismissAll();
		return
	}
}
