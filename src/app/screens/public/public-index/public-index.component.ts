import {Component, OnInit} from '@angular/core';
import {Collection} from "../../../models/Collection";
import {AbstractRestService} from "../../../services/genericservice";

@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css']
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  collections !: Collection[];

  ngOnInit(): void {
    this.step = 0;
  }

  constructor(private collectionService: AbstractRestService<Collection>) {
  }
}
