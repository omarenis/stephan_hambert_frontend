import {Component, Inject, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Collection} from "../../../models/stock_managment/Collection";
import {Product} from "../../../models/stock_managment/Product";
import {FormGroup} from "@angular/forms";
import {ComponentNotifyService} from "../../../services/component-ntify.service";


@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css']
})
export class PublicIndexComponent implements OnInit {
  step !: number;
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

  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document,
              private notificationService: ComponentNotifyService) {
    document.documentElement.setAttribute('style', 'overflow-x: hidden');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnInit(): void {
    this.notificationService.setConnection({
      operation: "navigation",
      page: "index"
    });
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
      items: 3,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1
        },
        740: {
          items: 3
        },
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
      slug: 'original',
    }, {
      title: '',
      code: '',
      description: '',
      slug: 'original',
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
      slug: '',
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
      slug: '',
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      slug: '',
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
      slug: '',
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
      slug: '',
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
      }]
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

  moveToSlide(step: number) {
    this.transitionStep = false;
  }

  protected readonly window = window;
  newsletterFormGroup !: FormGroup;
}
