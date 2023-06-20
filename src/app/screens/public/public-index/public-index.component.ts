import {Component, Inject, OnInit} from '@angular/core';
import {Collection} from "../../../models/Collection";
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css']
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  collections !: Collection[];
  startItem !: number;

  ngOnInit(): void {
    this.step = 0;
    this.startItem = 0;
    this.document.body.classList.add('overflow-x-hidden');
  }

  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
  }

  nextSlider() {
    this.startItem++;
  }

  addStep() {
    this.startItem++
  }
}
