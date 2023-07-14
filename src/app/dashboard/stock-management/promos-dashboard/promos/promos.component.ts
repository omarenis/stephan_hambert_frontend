import { Component } from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Promo, promoObject} from "../../../../models/stock_managment/Promo";
import {environment} from "../../../../../environments/environment";
import {CrudConsumer} from "../../../../services/CrudConsumer";

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent extends CrudConsumer<Promo> {
  err !: string;
  constructor(protected override service: AbstractRestService<Promo>) {
    super(service, `${environment.url}/promos`, {
      headers: {},
      params: {}
    }, promoObject, true);
  }

  submit($event: any) {

  }
}
