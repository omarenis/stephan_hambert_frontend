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
    trigger('left', [
      state('true', style({
        transform: 'translate(-100%)',
      })),
      state('false', style({
        transform: 'translate(100%)'
      })),
      transition('true => false', animate('1.5s ease-in-out')),  // animation timing
      transition('false => true', animate('1.5s ease-in-out')),
      transition('true => true', animate('1.5s ease-in-out')),
      transition('false => false', animate('1.5s ease-in-out'))
    ]),
    trigger('right', [
      state('true', style({
        transform: 'translate(100%)',
      })),
      state('false', style({
        transform: 'translate(-100%)'
      })),
      transition('true => false', animate('1000ms linear')),  // animation timing
      transition('false => true', animate('1000ms linear'))
    ])
  ]
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  collections !: Collection[];
  startItem !: number;
  move !: string;
  left !: string;
  right !: string;
  ngOnInit(): void {
    this.step = 0;
    this.startItem = 0;
    this.document.body.classList.add('overflow-x-hidden');
  }

  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
  }

  prevSlider() {
    this.left = 'true';
    this.right = '';
  }

  nextSlider() {
    this.right = 'true';
    this.left = '';
  }
}
