import { Component } from '@angular/core';
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Collection} from "../../../../models/Collection";
import {AbstractRestService} from "../../../../services/genericservice";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent extends CrudConsumer<Collection> {
  public totalGain !: number;
  constructor(protected collectionService: AbstractRestService<Collection>) {
    super(collectionService, `${environment.url}/collections`, {
      headers: {}, params: {}
    }, {
      image: {type: 'string', required: true },
      label: {type: 'string', required: true},
      description: {type: 'string', required: true}
    });
  }

  override async ngOnInit() {
    this.totalGain = 0;
    await super.ngOnInit();
    this.data.forEach((element) => {
      this.totalGain += element.total_gain;
    });
  }
}
