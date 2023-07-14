import { Component } from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Collection, collectionObject} from "../../../../models/stock_managment/Collection";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {FormView} from "../../../../services/FormView";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent extends FormView<Collection>  {
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
    console.log(this.formGroup.invalid);
    console.log(this.formGroup.value);
  }

  protected readonly window = window;
}
