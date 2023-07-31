import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../dashboard/stock-management/models/Product";
import {environment} from "../../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";
import {ComponentNotifyService} from "../../../services/component-ntify.service";
import {Comment} from "../../../dashboard/crm/models/Comment";
import {DOCUMENT} from "@angular/common";
import Options from 'photoswipe';
import Item from 'photoswipe';
export interface PSUIOptions extends Options {
    addCaptionHTMLFn?: (item: PSItem, captionEl: HTMLElement, isFake?: boolean) => boolean;
    shareEl?: boolean;
}

class WebKitPoint {
}

export interface PSItem extends Item {
    bounds?: PSItemBounds;
    imageAppended?: boolean;
    img?: HTMLImageElement;
    initialPosition?: WebKitPoint;
    loaded?: boolean;
    loading?: boolean;
    // pid?: number;
    title?: string;
    msrc?: string;
}

export interface DynamicPSItem {
    smallImage?: PSItem;
    mediumImage?: PSItem;
    largeImage?: PSItem;
    originalImage: PSItem;
}

export interface PSItemBounds {
    center: WebKitPoint;
    max: WebKitPoint;
    min: WebKitPoint;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product !: Product;
  private actionUrl = `${environment.url}/products`;
  products !: Product[];
  carousel !: OwlOptions;
  comments !: Comment[];

  constructor(private productService: AbstractRestService<Product>, private router: Router,
              private activatedRouter: ActivatedRoute, private notifyService: ComponentNotifyService,
              @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
      const photoswipeCss = document.createElement('link');
      photoswipeCss.rel = 'stylesheet';
      photoswipeCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.css';
      document.head.append(photoswipeCss);
    const photoswipeScript = document.createElement('script');
    photoswipeScript.src =  'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js';
    photoswipeScript.type = 'text/javascript';
    photoswipeScript.defer = true;

    this.document.body.append(photoswipeScript);
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
      slug: '',
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
      slug: '',
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
      slug: '',
      number_purchases: 0,
    }, {
      title: '',
      code: '',
      description: '',
      price: 0,
      current_quantity: 0,
      tva: 0,
      slug: '',
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
      slug: '',
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
      image: '/assets/img/products/product7.png',
      ingredients: '',
      category: 0,
      promo: 0,
      slug: '',
      number_purchases: 0,
    }];

    this.comments = [
      {
        client: {
          first_name: 'John',
          last_name: 'John',
          username: 'John',
          customerprofile: null,
          email: ''
        },
        product: 1,
        rating: 5,
        content: "Amazing fragrance I recommend to everyone.",
        dateComment: new Date(),
        id: 1
      },
      {
        client: {
          first_name: 'John',
          last_name: 'John',
          username: 'John',
          email: '',
          customerprofile: null,
        },
        product: 1,
        rating: 5,
        content: "Amazing fragrance I recommend to everyone.",
        dateComment: new Date(),
        id: 1
      },
      {
        client: {
          first_name: 'John',
          last_name: 'John',
          username: 'John',
          email: '',
          customerprofile: null,
        },
        product: 1,
        rating: 5,
        content: "Amazing fragrance I recommend to everyone.",
        dateComment: new Date(),
        id: 1
      },
      {
        client: {
          first_name: 'John',
          last_name: 'John',
          username: 'John',
          email: '',
          customerprofile: null,
        },
        product: 1,
        rating: 5,
        content: "Amazing fragrance I recommend to everyone.",
        dateComment: new Date(),
        id: 1
      },
      {
        client: {
          first_name: 'John',
          last_name: 'John',
          username: 'John',
          email: '',
          customerprofile: null,
        },
        product: 1,
        rating: 5,
        content: "Amazing fragrance I recommend to everyone.",
        dateComment: new Date(),
        id: 1
      }
    ];
    this.activatedRouter.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.productService.get(this.actionUrl, Number(params['id'])).subscribe(
          {
            next: (product: Product) => this.product = product,
            error: (err) => {
              console.log(err);
            }
          }
        )
      }
    })
  }
}
