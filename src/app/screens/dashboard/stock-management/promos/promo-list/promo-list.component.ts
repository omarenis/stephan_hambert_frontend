import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../../services/CrudConsumer";
import {Promo, promoObject} from "../../../../../models/Promo";
import {AbstractRestService} from "../../../../../services/genericservice";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent extends CrudConsumer<Promo>{
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
