import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../../services/CrudConsumer";
import {Collection} from "../../../../../models/stock_managment/Collection";
import {AbstractRestService} from "../../../../../services/genericservice";
import {Router} from "@angular/router";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-collections-dashboard-list',
  templateUrl: './collection-dashboard-list.component.html',
  styleUrls: ['./collection-dashboard-list.component.css']
})
export class CollectionDashboardList extends CrudConsumer<Collection> {
  constructor(protected override service: AbstractRestService<Collection>, private router: Router) {
    super(service, `${environment.url}/collections`, {
      headers: {},
      params: {}
    }, {
    });
  }

  orderBy(id: string) {

  }

  protected readonly Number = Number;
}
