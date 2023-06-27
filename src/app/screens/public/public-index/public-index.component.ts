import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {Collection} from "../../../models/stock_managment/Collection";
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../models/stock_managment/Product";
import {Category} from "../../../models/stock_managment/Category";
import {Promo} from "../../../models/stock_managment/Promo";

@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css']
})
export class PublicIndexComponent implements OnInit {
  step !: number;
  navStep !: number;
  collections !: ({
    image: string;
    description: string;
    label: string;
    id: number
  })[];
  position !: string;
  initialValue !: number;
  order = 0;
  transitionStep !: boolean;
  carousel !: OwlOptions;
  products !: Product[];
  width !: number;
  height !: number;
  @ViewChild('productContainer') el !: ElementRef;
  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.initialValue = 0;
    this.position = 'initial';
    this.step = 0;
    this.document.body.classList.add('overflow-x-hidden');
    this.carousel = {
      loop: true,
      dots: false,
      navSpeed: 800,
      center: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 3
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      nav: true
    }
    this.products = [{
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product1.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product2.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product3.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product4.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product5.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product6.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product7.png',
      ingredients: '',
      category: 0,
      promo: 0,
      number_purchases: 0,
    }];

    this.collections = [{
      image: '/assets/img/collections/collection_777.png',
      label: 'LA COLLECTION 777',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
      id: 0
    },
      {
        image: '/assets/img/collections/collection_serpent.png',
        label: 'LA COLLECTION SERPENT',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
        id: 0
      }];
    this.navStep = 0;
  }

  prevSlider() {
    this.position = this.position === 'right' ? 'left' : 'right';
    this.initialValue -= 100;
  }

  changeCursorArrow(event: MouseEvent) {
    console.log(event.clientX > window.innerWidth * 2 / 4);
    if (event.clientX > window.innerWidth * 2 / 4) {
      this.mouseLogo = true;
    }
    if (event.clientX < window.innerWidth / 4) {
      this.mouseLogo =  false;
    }
    this.mouseLogo =  null;
  }

  nextSlider(event: any) {
    console.log(event.currentTarget.classList);
    this.position = this.position === 'right' ? 'left' : 'right';
    this.initialValue += 100;
  }

  moveToSlide(step: number) {
    this.step = step;
  }

  protected readonly window = window;
  mouseLogo !: boolean | null;

  selectProducts(navStep: number) {
    this.navStep = navStep;
  }

  startAnimation(swipeup: string, $event: any, i: number) {
    console.log(i);
  }
}
