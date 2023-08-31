import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {LoginSignupService} from "../../services/login-signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebarDisplayed !: boolean;
  constructor(@Inject(DOCUMENT) private document: Document, private loginSignupService: LoginSignupService, private router: Router) {}


  ngOnInit(): void {
    this.sidebarDisplayed = false;
    if(!this.document.body.classList.contains('g-sidenav-show')){
      this.document.body.classList.add('g-sidenav-show');
    }
    this.document.body.classList.add('bg-gray-100');
    console.log(this.document.head.innerHTML);
  }
  logout()
  {
    const refresh = localStorage.getItem('refresh');
    const access  =localStorage.getItem('access');
    if(refresh !== null && access !== null)
    {
    this.loginSignupService.logout(refresh, access).subscribe({
      next: () => {
        this.router.navigate(['/public']);
        localStorage.clear();
      }
    })
    }
  }
}
