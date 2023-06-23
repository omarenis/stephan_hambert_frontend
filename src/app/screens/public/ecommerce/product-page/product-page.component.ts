import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Product} from "../../../../models/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product !: Product;
  private actionUrl = `${environment.url}/products`;

  constructor(private productService: AbstractRestService<Product>, private router: Router,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.productService.get(this.actionUrl, Number(params['id'])).subscribe(
          {
            next: (product: Product) => this.product = product,
            error: (err) => {
              console.log(err);
            }
          }
        )
      }
    })
  }
}
