import {Component, Inject, OnInit} from '@angular/core';
import {Collection} from "../../../models/Collection";
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css'],
  animations: [
    trigger('position', [
      state('left', style({
        transform: 'translate({{ initialState }}%)',
      }), {params: {initialState: 0}}),
      state('right', style({
        transform: 'translate({{ initialState }}%)',
      }), {params: {initialState: 0}}),
      transition('* <=> *', animate('1.5s ease-in'))
    ])
  ]
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  collections !: Collection[];
  position !: string;
  initialValue !: number;

  ngOnInit(): void {
    this.initialValue = 0;
    this.position = 'initial';
    this.document.body.classList.add('overflow-x-hidden');
  }

  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
  }

  prevSlider() {
    this.position =  this.position ===  'right' ? 'left': 'right';
    this.initialValue -= 100;
  }

  nextSlider() {
    this.position = this.position ===  'right' ? 'left': 'right' ;
    this.initialValue += 100;
  }
}
