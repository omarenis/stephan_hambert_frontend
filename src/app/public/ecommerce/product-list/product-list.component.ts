import {Component, OnInit} from '@angular/core';
import {Product} from "../../../dashboard/stock-management/models/Product";
import {environment} from "../../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products !: Product[];
    protected readonly window = window;
    private actionUrl = `${environment.url}/products`

    constructor(private productService: AbstractRestService<Product>) {
    }

    ngOnInit(): void {
        this.productService.list(this.actionUrl).subscribe({
            next: (products: Product[]) => {
                this.products = products;
            }
        });
        this.products = [
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                collection: '',
                promo: 0,
                number_purchases: 5,
                id: 1,
            },
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                collection: '',
                promo: 0,
                number_purchases: 5,
                id: 1,
            },
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                promo: 0,
                number_purchases: 5,
                collection: '',
                id: 1,
            },
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                collection: '',
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                promo: 0,
                number_purchases: 5,
                id: 1,
            },
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                collection: '',
                promo: 0,
                number_purchases: 5,
                id: 1,
            },
            {
                slug: 'fùmfkznfmzlknfmzlkfn',
                title: 'Original',
                code: 'flkfbljfblzkfjbzlkjbf',
                content: 'zefljfblzkjfblzkjfbzlkjfbzlkjfb',
                price: 15.02,
                current_quantity: 4,
                tva: 0.19,
                image: '/assets/img/products/product1.png',
                collection: '',
                promo: 0,
                number_purchases: 5,
                id: 1,
            },
        ]
    }
}
