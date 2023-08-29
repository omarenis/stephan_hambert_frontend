import {ChangeDetectorRef, Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ComponentNotifyService} from "../../services/component-ntify.service";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
scrolled !: boolean;
  isIndex !: boolean;
  isConnected !: boolean;
  constructor(@Inject(DOCUMENT) private document: Document, private notificationService: ComponentNotifyService, private detection: ChangeDetectorRef) {
    console.log("hel")
  }

  @HostListener('window:scroll', ['$event'])
  scrolling($event: any) {
    this.scrolled = window.scrollY > 50;

  }

  ngOnInit(): void {
    this.scrolled = false;
    this.isConnected  = localStorage.getItem('userId') !== null;
    if (this.document.body.classList.contains('g-sidebar-show')) {
      this.document.body.classList.remove('bg-sidebar-show')
    }
    if (this.document.body.classList.contains('bg-gray-100')) {
      this.document.body.classList.remove('bg-gray-100');
    }
    this.notificationService.getComponentNotification().subscribe((message: Record<string, any>) => {
      this.isIndex = message["operation"] !== undefined && message["operation"] == 'navigation' && message["page"] == 'index';
      this.detection.detectChanges();
    });
  }
}
