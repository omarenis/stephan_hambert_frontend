import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Product, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {environment} from "../../../../../environments/environment";
import {Operation} from "../../../../models/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends CrudConsumer<Product>{
  output  = [];
  constructor(protected override service: AbstractRestService<Product>, private router: Router) {
    super(service, `${environment.url}/products`, {headers: {}, params: {}}, productObject);
  }

  override async ngOnInit() {
    await super.ngOnInit();
  }

  getProduct(operation: Operation): void
  {
    if(operation.operation === 'navigate')
    {
      this.router.navigate(['/dashboard/stock-management/products/' + operation.data['id']]).then(() => {})
    }
  }

  protected readonly event = event;
}
