import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";
import {environment} from "../../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";
import {ComponentNotifyService} from "../../../services/component-ntify.service";
import {Comment} from "../../../dashboard/crm/models/Comment";
import {DOCUMENT} from "@angular/common";
import {Lightbox} from "ngx-lightbox";
import {Product} from "../../models/Product";
import {json} from "express";
import {productObject} from "../../../dashboard/stock-management/models/Product";
import {OrderLine} from "../models/OrderLine";


@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
    product !: Product;
    products !: Product[];
    carousel !: OwlOptions;
    selectedPrice !: string;
    comments !: Comment[];
    quantity !: number;
    private actionUrl = `${environment.url}/public/products`;
    historyImage !: string | undefined;
    olfactionImage !: string | undefined;

    constructor(private productService: AbstractRestService<Product>, private router: Router,
                private activatedRouter: ActivatedRoute, private notifyService: ComponentNotifyService,
                @Inject(DOCUMENT) private document: Document, private _lightBox: Lightbox) {
    }

    ngOnInit() {
      this.selectedPrice  = "price_20_ml";
        this.quantity = 0;
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
            description: '',
            price: 0,
            slug: '',
            image: '/assets/img/products/product1.png',
            collection: '',
        }, {
            title: '',
            description: '',
            price: 0,
            slug: '',
            image: '/assets/img/products/product2.png',
            collection: '',
        }, {
            title: '',
            description: '',
            price: 0,
            image: '/assets/img/products/product3.png',
            collection: '',
            slug: '',
        }, {
            title: '',
            description: '',
            price: 0,
            slug: '',
            image: '/assets/img/products/product4.png',
            collection: '',
        }, {
            title: '',
            description: '',
            price: 0,
            image: '/assets/img/products/product5.png',
            collection: '',
            slug: '',
        }, {
            title: '',
            description: '',
            price: 0,
            image: '/assets/img/products/product6.png',
            collection: '',
            slug: '',
        }, {
            title: '',
            description: '',
            price: 0,
            image: '/assets/img/products/product7.png',
            collection: '',
            slug: '',
        }];

        this.comments = [
            {
                client: {
                    first_name: 'John',
                    last_name: 'John',
                    username: 'John',
                    customerprofile: null,
                    email: '',
                    last_login: '',
                    date_joined: '',
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
                    last_login: '',
                    date_joined: '',
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
                    last_login: '',
                    date_joined: '',
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
                    last_login: '',
                    date_joined: '',
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
                    last_login: '',
                    date_joined: '',
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
                this.productService.get(this.actionUrl, params['id']).subscribe(
                    {
                        next: (product: Product) => {
                            this.product = product;
                            console.log(product);
                            if (product.image) {
                                product.image = product.image.toString();
                                this.historyImage = environment.originBackend + product.history?.image.toString();
                                this.olfactionImage = environment.originBackend + product.olfaction?.image.toString();
                            }
                            this.product.image = environment.originBackend + this.product.image;
                        },
                        error: (err) => {
                            console.log(err);
                        }
                    }
                )
            }
        })
    }

    addToCart() {
        let orderlinesString = localStorage.getItem(`orderlines`);
        if (orderlinesString === null) {
            orderlinesString = "[]";
        }
        let orderlines: OrderLine[] = Array.from(JSON.parse(orderlinesString));
        if (orderlines !== null) {
            let edited = false;
            orderlines.map((item) => {
                if (item.product.id == this.product.id) {
                    item.quantity = this.quantity;
                    item.totalHt = this.product.price * this.quantity;
                }
                edited = true;
                return item;
            });
            if (!edited) {

                orderlines.push({
                    product: this.product,
                    quantity: this.quantity,
                    totalHt: this.quantity * this.product.price,
                });
            }
        }

        localStorage.setItem('orderlines', JSON.stringify(orderlines))
    }
}
