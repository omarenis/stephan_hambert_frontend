import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  scrolled !: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('window:scroll', ['$event'])
  scrolling($event: any) {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    this.scrolled = false;
    if (this.document.body.classList.contains('g-sidebar-show')) {
      this.document.body.classList.remove('bg-sidebar-show')
    }
    if (this.document.body.classList.contains('bg-gray-100')) {
      this.document.body.classList.remove('bg-gray-100');
    }
  }
}
