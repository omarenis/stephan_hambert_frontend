import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../dashboard/stock-management/models/Product";
interface Item {
  title: string;
  description: string;
  slug: string;
  image: string | File;
}
@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel !: OwlOptions;
  @Input() numberItems !: number;

    @Input() products !: Item[];

  ngOnInit(): void {
    this.carousel = {
      loop: true,
      dots: false,
      navSpeed: 800,
      center: true,
      nav: false,
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
    }
  }
}
