import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../services/genericservice";
import {environment} from "../../../../environments/environment";
import {Collection} from "../../../models/Collection";

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
        console.log(result);
      }
    });
    this.collections = [
      {
        title: 'Collection 777',
        image: '',
        total_gain: 0,
        number_purchases: 0,
        number_products: 0,
        id: 1,
        citation: "",
        content: 'helezmezbfmkzebfmkezjbmkezjbzme',
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
        title: 'Collection 777',
        image: '',
        total_gain: 0,
        number_purchases: 0,
        number_products: 0,
        id: 2,
        citation: '',
        content: 'helezmezbfmkzebfmkezjbmkezjbzme',
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

  protected readonly environment = environment;
}
