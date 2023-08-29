import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../services/genericservice";
import {environment} from "../../../../environments/environment";
import {Collection} from "../../../models/Collection";
import {co} from "@fullcalendar/core/internal-common";
import {isColPropsEqual} from "@fullcalendar/core/internal";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  protected collections !: Collection[];

  constructor(private collectionService: AbstractRestService<Collection>) {
  }

  ngOnInit() {
    this.collectionService.list(`${environment.url}/public/collections`).subscribe({
      next: (result: Collection[]) => {
        this.collections = result;
        console.log(result);
        this.collections.map(collection =>  {
          if(collection.additionalinformationcollection_set === undefined)
          {
            collection.additionalinformationcollection_set =  [];
          }
        })
      }
    });
  }

  protected readonly environment = environment;
}
