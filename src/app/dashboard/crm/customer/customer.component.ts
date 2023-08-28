import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractRestService} from "../../../services/genericservice";
import { User } from '../models/User';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  item !: User;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: AbstractRestService<User>) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if(isNaN(Number(params['id'])))
      {
        this.router.navigate(['/404']).then(() => {});
        return;
      }
      this.service.get(`${environment.url}/users`, Number(params['id'])).subscribe({
        next: (user: User) => {
          this.item = user;
        }
      });
    });
  }
}
