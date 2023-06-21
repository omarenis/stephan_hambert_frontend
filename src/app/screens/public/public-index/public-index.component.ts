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
      state('initial', style({
        transform: 'translate(0%)'
      })),
      state('initial', style({
        transform: 'translate({{ initialState }}%)',
        animate: '1.5s ease-in-out'
      }), {params: {initialState: 0}}),
      state('left', style({
        transform: 'translateX(-100%)'
      })),
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('initial <=> left', animate('1.5s ease-in')),
      transition('initial => right', animate('1.5s ease-in'))
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
    this.position = 'left';
    this.initialValue -= 50;
    this.position ='initial';
  }

  nextSlider() {
    this.position = this.position === 'right' ? 'right': 'right';
    this.initialValue += 50;
  }
}
