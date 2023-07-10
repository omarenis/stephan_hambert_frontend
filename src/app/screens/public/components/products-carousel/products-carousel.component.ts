import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../../models/stock_managment/Product";

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit{
  carousel !: OwlOptions;
  @Input() numberItems !: number;

  @Input() products !: Product[];
  ngOnInit(): void {
    this.carousel = {
      loop: true,
      dots: false,
      navSpeed: 800,
      center: true,
      items: this.numberItems,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1
        },
        740: {
          items: this.numberItems
        },
      },
      nav: true
    }
  }
}
