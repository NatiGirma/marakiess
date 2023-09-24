import { Component } from '@angular/core';
import adminData from "../../../../admin-data.json"

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent {
  leaveRequests = adminData.leave_requests
}
