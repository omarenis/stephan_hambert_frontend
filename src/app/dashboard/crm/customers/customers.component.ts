import { Component } from '@angular/core';
import {User} from "../models/User";
import {CrudConsumer} from "../../../services/CrudConsumer";
import {environment} from "../../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent extends  CrudConsumer<User>{

  protected readonly environment = environment;
  constructor(protected override service: AbstractRestService<User>, private activatedRoute: ActivatedRoute, private router: Router) {
    super(service, `${environment.url}/customers`, {params: {}, headers: {}}, {
      first_name: {type: 'string', required: true},
      last_name: {type: 'string', required: true},
      email: {type: 'string', required: true},
      username: {type: 'string', required: true},
    });
  }
}
