import { Component } from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Collection} from "../../../../models/Collection";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent  extends  CrudConsumer<Collection> {
constructor(protected override service: AbstractRestService<Collection>, private router: Router) {
    super(service, `${environment.url}/collections`, {
      headers: {},
      params: {}
    }, {
    });
  }

    protected readonly environment = environment;

  async edit(id: number | undefined) {
    if(id === undefined){
      return;
    }
    await  this.router.navigate(['/dashboard/stock-management/collections', id]);
  }
}
