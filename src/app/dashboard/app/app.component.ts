import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebarDisplayed !: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit(): void {
    this.sidebarDisplayed = false;
    if(!this.document.body.classList.contains('g-sidenav-show')){
      this.document.body.classList.add('g-sidenav-show');
    }
    this.document.body.classList.add('bg-gray-100');
  }
}

