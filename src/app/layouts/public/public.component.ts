import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    if (this.document.body.classList.contains('g-sidebar-show')) {
      this.document.body.classList.remove('bg-sidebar-show')
    }
    if (this.document.body.classList.contains('bg-gray-100')) {
      this.document.body.classList.remove('bg-gray-100');
    }
  }
}
