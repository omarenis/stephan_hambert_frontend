import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../../services/CrudConsumer";
import {Promo} from "../../../../../models/stock_managment/Promo";
import {AbstractRestService} from "../../../../../services/genericservice";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent extends CrudConsumer<Promo>{
  constructor(protected override service: AbstractRestService<Promo>) {
    super(service, `${environment.url}/promos`, {
      headers: {},
      params: {}
    }, {
      label: {type: 'string', required: true},
      datetime_start: {type: 'date', required: true},
      datetime_end: {type: 'date', required: true},
      percentage: {type: 'float', required: true}
    }, true);
  }
}
