import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Inscription {
  email: string;
}

@Component({
  selector: '[app-newsletter]',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})


export class NewsletterComponent implements OnInit {
  formGroup !: FormGroup;
  constructor() {
  }
  ngOnInit() {

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
}
