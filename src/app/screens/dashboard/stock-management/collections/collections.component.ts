import {Component} from '@angular/core';
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {AbstractRestService} from "../../../../services/genericservice";
import {Collection} from "../../../../models/Collection";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent extends CrudConsumer<Collection> {
  constructor(protected collectionConsumer: AbstractRestService<Collection>) {
    super(collectionConsumer, `${environment.url}/collections`, {
      headers: {},
      params: {}
    }, {
      image: {type: 'string', required: true},
      label: {type: 'string', required: true},
      description: {type: 'string', required: true},
      ClassType: Collection,
      urlGetMapper: `${environment.url}/collections`
    }, false);
  }
}
