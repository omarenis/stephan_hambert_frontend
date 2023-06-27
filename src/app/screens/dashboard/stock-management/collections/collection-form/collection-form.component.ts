import { Component } from '@angular/core';
import {FormView} from "../../../../../services/FormView";
import {Collection, collectionObject} from "../../../../../models/stock_managment/Collection";
import {AbstractRestService} from "../../../../../services/genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
  export class CollectionFormComponent extends FormView<Collection> {
  imagePath: any;
  constructor(protected override service: AbstractRestService<Collection>,
              protected override  router: Router, protected override activatedRoute: ActivatedRoute) {
    super(service, router, activatedRoute, collectionObject, `${environment.url}/collections`);
  }

  readImage($event: Event) {
    $event.preventDefault();

  }

  submit(event: Event) {
    event.preventDefault();
  }
}
