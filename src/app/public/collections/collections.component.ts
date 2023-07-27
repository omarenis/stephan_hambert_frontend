import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../services/genericservice";
import {Collection} from "../../dashboard/stock-management/models/Collection";
import {environment} from "../../../environments/environment";

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
    this.collectionService.list(`${environment.url}/collections`).subscribe({
      next: (result) => {
        this.collections = result;
      }
    })
  }
}
