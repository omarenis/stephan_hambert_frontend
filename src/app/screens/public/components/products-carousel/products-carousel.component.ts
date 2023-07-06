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

  @Input() products !: Product[];
  ngOnInit(): void {
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
  }
}
