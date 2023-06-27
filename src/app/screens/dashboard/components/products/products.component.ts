import {Component, EventEmitter, Input} from '@angular/core';
import {Product} from "../../../../models/stock_managment/Product";

@Component({
  selector: '[app-products]',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products !: Product[];
  @Input() editable !: boolean;
  ngOnInit() {

  }
  orderBy($event: MouseEvent): void {
    $event.preventDefault();
  }
}
