import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {Operation} from "../../../../models/forms";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: '[app-products-table]',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @Input() products !: Product[];

  @Input() editable !: boolean;
  @Output() sensOperation: EventEmitter<Operation> = new EventEmitter<Operation>();
  ngOnInit() {
    this.products.map<Product>(item => {
      item.promo = typeof item.promo !== 'number' && typeof item.promo !== 'string' ? item.promo.title : item.promo.toString();
      return item;
    })
  }

  orderBy(field: string)
  {
    this.sensOperation.emit({
      operation: 'orderBy',
      data: {
        field: field,
        order: 'ASC'
      }
    });
  }

  delete(id: number)
  {
    this.sensOperation.emit({
      operation: 'delete',
      data: {
        id: id
      }
    });
  }

  protected readonly environment = environment;
}
