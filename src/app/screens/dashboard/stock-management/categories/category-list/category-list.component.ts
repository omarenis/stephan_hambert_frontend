import { Component } from '@angular/core';
import {AbstractRestService} from "../../../../../services/genericservice";
import {Promo} from "../../../../../models/Promo";
import {environment} from "../../../../../../environments/environment";
import {CrudConsumer} from "../../../../../services/CrudConsumer";
import {Category} from "../../../../../models/Category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends CrudConsumer<Category>{
  constructor(protected override service: AbstractRestService<Category>) {
    super(service, `${environment.url}/categories`, {
      headers: {},
      params: {}
    }, {
      label: {type: 'string', required: true},
    });
  }
}
