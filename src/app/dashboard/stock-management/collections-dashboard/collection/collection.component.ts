import { Component } from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Collection, collectionObject, OtherInformationCollection} from "../../models/Collection";
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
 otherInformation !: OtherInformationCollection[];
  constructor(protected override service: AbstractRestService<Collection>,
              protected override  router: Router, protected override activatedRoute: ActivatedRoute, private otherInformationService:   AbstractRestService<OtherInformationCollection>) {
    super(service, router, activatedRoute, collectionObject, `${environment.url}/collections`, 'multipart/form-data');
    this.steps = ['collection essential information'];
  }

  readImage($event: Event) {
    $event.preventDefault();

  }

  submit(event: Event) {
    console.log(this.foreignKeyInstanceList);
  }

  protected readonly window = window;
  steps !: string[];
}
