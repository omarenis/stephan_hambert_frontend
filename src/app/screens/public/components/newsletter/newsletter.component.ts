import {Component, OnInit} from '@angular/core';

interface Inscription {
  email: string;
}

@Component({
  selector: '[app-newsletter]',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})


export class NewsletterComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {

  }
}
