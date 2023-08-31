import {Component, OnInit} from '@angular/core';
import {Product} from "../../../dashboard/stock-management/models/Product";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Collection} from "../../../models/Collection";
import {ActivatedRoute} from "@angular/router";
interface Response {
  products: Product[];
  collections: Collection[];
}
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products !: Product[];
    collections !: Collection[];
    selectedCollection !: number;
    protected readonly window = window;
    private actionUrl = `${environment.url}/public/products`

    constructor(private service: HttpClient, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((params) => {
        this.selectedCollection = params['collection'] !== undefined ? params['collection'] : undefined;
        this.service.get<Response>(this.actionUrl, {params}).subscribe({
          next: (response: Response) => {
            this.products = response.products;
            this.collections = response.collections;
          }
        });
      });
    }

  filterData(id: number | undefined) {
    if(id !== null)
    {
      this.service.get<Response>(this.actionUrl, id !== -1 ? {params: {collection: Number(id)}}: undefined).subscribe({
            next: (response: Response) => {
                this.products = response.products;
            }
        });
    }
  }

  protected readonly environment = environment;
}
