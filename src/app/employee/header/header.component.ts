import { Component, ElementRef, ViewChild } from '@angular/core';
import employeeData from "../../../../employee-data.json"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = employeeData.first_name
  @ViewChild('menu', { static: false })
  menu!: ElementRef;

  constructor (private router: Router) { }

  toggleMenu() {
    this.menu.nativeElement.classList.toggle('open-menu')
  }

  logout() {
    // Clear Local Storage

    // For Now Redirecting To Login Page
    this.router.navigateByUrl("/employee/auth/login")
  }
}
