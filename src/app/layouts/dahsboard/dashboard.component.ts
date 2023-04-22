import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  sidebarDisplayed !: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:resize', ['$event'])
  resize(): void {
  }

  ngOnInit(): void {
    this.sidebarDisplayed = false;
    if(!this.document.body.classList.contains('g-sidenav-show')){
      this.document.body.classList.add('g-sidenav-show');
    }
    this.document.body.classList.add('bg-gray-100');
  }
}
