import { Component } from '@angular/core';
import {FormView} from "../../../services/FormView";
import {Order} from "../../../public/ecommerce/models/Order";
import {AbstractRestService} from "../../../services/genericservice";
import {Router} from "@angular/router";
import {CrudConsumer} from "../../../services/CrudConsumer";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent extends CrudConsumer<Order> {
  constructor(protected override service: AbstractRestService<Order>, protected router: Router) {
    super(service, `${environment.url}`, {params: {}, headers: {}}, );
  }
}
