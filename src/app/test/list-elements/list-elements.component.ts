import { Component } from '@angular/core';
import {CrudConsumer} from "../../services/CrudConsumer";
import {AbstractRestService} from "../../services/genericservice";
interface Product {
  label: string;
  price: number;
  id ?: number;
}
@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent extends CrudConsumer<Product>{
  constructor(protected override service: AbstractRestService<Product>) {
    super(service, ':api/products', {headers: {}, params: {}}, {
      label: {type: 'string', required: true},
      price: {type: 'number', required: true}
    });

    console.log(this.formGroupSearch);
  }
}
