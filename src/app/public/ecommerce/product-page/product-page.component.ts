import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../dashboard/stock-management/models/Product";
import {environment} from "../../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";
import {ComponentNotifyService} from "../../../services/component-ntify.service";
import {Comment} from "../../../dashboard/crm/models/Comment";
import {DOCUMENT} from "@angular/common";
import {Lightbox} from "ngx-lightbox";


@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
    product !: Product;
    products !: Product[];
    carousel !: OwlOptions;
    comments !: Comment[];
    private actionUrl = `${environment.url}/products`;

    constructor(private productService: AbstractRestService<Product>, private router: Router,
                private activatedRouter: ActivatedRoute, private notifyService: ComponentNotifyService,
                @Inject(DOCUMENT) private document: Document, private _lightBox: Lightbox) {
    }

    ngOnInit() {
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
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            slug: '',
            image: '/assets/img/products/product1.png',
            collection: '',
            promo: 0,
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            slug: '',
            image: '/assets/img/products/product2.png',
            collection: '',
            promo: 0,
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            image: '/assets/img/products/product3.png',
            collection: '',
            promo: 0,
            slug: '',
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            slug: '',
            image: '/assets/img/products/product4.png',
            collection: '',
            promo: 0,
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            image: '/assets/img/products/product5.png',
            collection: '',
            promo: 0,
            slug: '',
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            image: '/assets/img/products/product6.png',
            collection: '',
            slug: '',
            promo: 0,
            number_purchases: 0,
        }, {
            title: '',
            code: '',
            content: '',
            price: 0,
            current_quantity: 0,
            tva: 0,
            image: '/assets/img/products/product7.png',
            collection: '',
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
                        next: (product: Product) => {
                            this.product = product;
                            console.log(product);
                        },
                        error: (err) => {
                            console.log(err);
                        }
                    }
                )
            }
        })
    }
}
