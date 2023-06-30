import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../models/stock_managment/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products !:Product[];
  private actionUrl = `${environment.url}/products`
  constructor(private productService: AbstractRestService<Product>){}

  ngOnInit(): void {
    this.productService.list(this.actionUrl).subscribe(products => {
      this.products = products;
    });
  }
}
