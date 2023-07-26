import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Product, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends CrudConsumer<Product>{
  constructor(protected override service: AbstractRestService<Product>, ) {
    super(service, `${environment.url}/products`, {headers: {}, params: {}}, productObject);
  }
}
