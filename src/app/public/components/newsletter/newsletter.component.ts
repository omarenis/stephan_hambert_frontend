import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {environment} from "../../../../environments/environment";

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
  constructor(private inscriptionService: AbstractRestService<Inscription>) {
  }
  ngOnInit() {

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit($event: Event)
  {
    $event.preventDefault();
    this.inscriptionService.create(`${environment.url}/newsletter/inscriptions`, {
      email: this.formGroup.value.email
    }).subscribe({
      next: () => {

      },
      error: () => {

      }
    })
  }
}
