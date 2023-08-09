import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../services/genericservice";
import {Collection} from "../../../dashboard/stock-management/models/Collection";
import {environment} from "../../../../environments/environment";

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
    });
    this.collections = [
      {
        label: 'Collection 777',
        image: '',
        total_gain: 0,
        number_purchases: 0,
        number_products: 0,
        id: 1,
        citation: "",
        description: 'helezmezbfmkzebfmkezjbmkezjbzme',
        otherinformationcollection_set: [
          {
            title: 'other infirmation1',
            content: 'eljfbelkjbeklfjbezfkjbzekjbez',
            collection: 1,
            id: 1,
            image: ''
          },
          {
            title: 'other infirmation1',
            content: 'eljfbelkjbeklfjbezfkjbzekjbez',
            collection: 1,
            id: 1,
            image: ''
          }
        ]
      },
      {
        label: 'Collection 777',
        image: '',
        total_gain: 0,
        number_purchases: 0,
        number_products: 0,
        id: 2,
        citation: '',
        description: 'helezmezbfmkzebfmkezjbmkezjbzme',
        otherinformationcollection_set: [
          {
            title: 'other infirmation1',
            content: 'eljfbelkjbeklfjbezfkjbzekjbez',
            collection: 1,
            id: 1,
            image: ''
          },
          {
            title: 'other infirmation1',
            content: 'eljfbelkjbeklfjbezfkjbzekjbez',
            collection: 1,
            id: 1,
            image: ''
          }
        ]
      },
    ]
  }
}
