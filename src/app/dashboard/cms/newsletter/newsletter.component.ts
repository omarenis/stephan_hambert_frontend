import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
interface Subscription {
  email: string;
  date_joined: Date | string;
  id ?: number;
}
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements  OnInit {
  data !: Subscription[]
  constructor(private newsletterSubscriptionService: HttpClient) {
  }
  ngOnInit() {
    this.newsletterSubscriptionService.get<Subscription[]>(`${environment.url}/newsletter/subscriptions`).subscribe({
      next: (result) => {
        this.data = result;
        this.data.forEach((item) => {
          item.date_joined  = new Date(item.date_joined);
        });
      }
    })
  }
}
