import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Category, categoryObject} from "../../../../models/Category";
import {AbstractRestService} from "../../../../services/genericservice";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
  constructor(protected override service: AbstractRestService<Category>, private router: Router, ) {
    super(service, `${environment.url}/categories`, {
      headers: {},
      params: {}
    }, categoryObject);
  }
}
