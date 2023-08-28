import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../dashboard/stock-management/models/Product";
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";
import {ComponentNotifyService} from "../../../services/component-ntify.service";
import {FormGroup} from "@angular/forms";
import {Collection} from "../../../models/Collection";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
step !: number;
  collections !: ({
    image: string;
    content: string;
    label: string;
    id: number
  })[];
  position !: string;
  initialValue !: number;
  order = 0;
  transitionStep !: boolean;
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
    this.products = [{
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      image: '/assets/img/products/product1.png',
      collection: '',
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
      collection: '',
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
      collection: '',
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
      collection: '',
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
      collection: '',
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
      collection: '',
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
      collection: '',
      promo: 0,
      slug: '',
      number_purchases: 0,
    }];

    this.collections = [{
      image: '/assets/img/collections/collection_777.png',
      label: 'LA COLLECTION 777',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
      id: 0
    },
      {
        image: '/assets/img/collections/collection_serpent.png',
        label: 'LA COLLECTION SERPENT',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
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
