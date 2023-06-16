import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/Product";

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