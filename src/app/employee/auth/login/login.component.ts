import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() email:string = "";
  @Input() password:string = "";

  constructor(private toastr: ToastrService, private router: Router) {}

  login() {
    if (this.email == "") {
      this.toastr.error('Email is not allowed to be empty!');
      return
    }
    if (this.password == "") {
      this.toastr.error('Password is not allowed to be empty');
      return
    }

    // API CALL
    

    // For Now Redirecting To Employee Dashboard Page
    this.router.navigateByUrl("/employee/dashboard");
  }
}
