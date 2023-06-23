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
      transition('* <=> *', animate('1s ease-in'))
    ])
  ]
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  collections !: Collection[];
  position !: string;
  initialValue !: number;
  customOptions  =   {
    loop: true,
    margin: 10,
    dots: false,
    center: true,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  };
  order = 0;

  ngOnInit(): void {
    this.initialValue = 0;
    this.position = 'initial';
    this.document.body.classList.add('overflow-x-hidden');
  }

  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
  }

  prevSlider() {
    this.position = this.position === 'right' ? 'left' : 'right';
    this.initialValue -= 100;
  }

  nextSlider(event: any) {

    console.log(event.currentTarget.classList);
    this.position = this.position === 'right' ? 'left' : 'right';
    this.initialValue += 100;
  }
}
