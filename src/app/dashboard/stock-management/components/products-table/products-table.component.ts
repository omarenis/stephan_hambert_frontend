import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Operation} from "../../../../models/forms";
import {environment} from "../../../../../environments/environment";
import {Promo} from "../../models/Promo";
import {Collection} from "../../../../models/Collection";
interface Product {
    title: string;
  code: string;
  slug: string;
  description: string;
  price_20_ml: number;
  price_50_ml: number;
  price_100_ml: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  promo: Promo | number | string;
  collection: Collection | string | number;
  number_purchases?: number;
  id?: number;
}
@Component({
  selector: '[app-products-table]',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

  }
  @Input() products: Product[] = [];

  @Input() editable !: boolean;
  @Output() sensOperation: EventEmitter<Operation> = new EventEmitter<Operation>();
  ngOnInit() {
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

  edit(id: number)
  {
    this.sensOperation.emit({
      operation: 'navigate',
      data: {
        id: id
      }
    })
  }
  protected readonly environment = environment;
  protected readonly Number = Number;
  protected readonly encodeURIComponent = encodeURIComponent;
}
