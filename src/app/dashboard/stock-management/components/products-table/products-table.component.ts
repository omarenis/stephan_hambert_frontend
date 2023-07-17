import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: '[app-products-table]',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @Input() products !: Product[];
  @Input() editable !: boolean;

  ngOnInit() {
  }

  orderBy(field: string)
  {}
}
