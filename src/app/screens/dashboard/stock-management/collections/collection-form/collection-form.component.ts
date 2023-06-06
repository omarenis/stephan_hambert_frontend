import { Component } from '@angular/core';
import {FormView} from "../../../../../services/FormView";
import {Collection} from "../../../../../models/Collection";
import {AbstractRestService} from "../../../../../services/genericservice";

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent extends FormView<Collection> {
  constructor(protected override service: AbstractRestService<Collection>,

  ) {
    super();
  }
}
