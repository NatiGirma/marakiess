import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  @Input() email:string = "";

  constructor(private toastr: ToastrService) {}

  resetPassword() {
    if (this.email == "" ) {
      this.toastr.error('Email is not allowed to be empty');
      return
    }

    // API Call

    this.toastr.success('Instruction on how to reset your password is sent to your email address.');
  }
}
