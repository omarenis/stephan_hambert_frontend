import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../dashboard/stock-management/models/Product";
import {AbstractRestService} from "../../../services/genericservice";
import {DOCUMENT} from "@angular/common";
import {ComponentNotifyService} from "../../../services/component-ntify.service";
import {FormGroup} from "@angular/forms";
import {Collection} from "../../../models/Collection";
import {CmsInformation} from "../../../models/CmsInformation";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
interface Response {
  products: Product[];
  collections: Collection[];
  presents: CmsInformation[]
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
step !: number;
  collections !: Collection[];
  position !: string;
  initialValue !: number;
  order = 0;
  transitionStep !: boolean;
  products !: Product[];
  width !: number;
  height !: number;
  presents !: CmsInformation[];
  constructor(private collectionService: AbstractRestService<Collection>, @Inject(DOCUMENT) private document: Document,
              private notificationService: ComponentNotifyService, private indexService: HttpClient) {
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
    this.indexService.get<Response>(`${environment.url}/public/index`).subscribe({
      next: (data: Response) => {
        if(data.collections.length >  0)
        {
          this.collections = data.collections;
        }
        if(data.presents.length > 0)
        {

        }
        this.products = data.products;
        console.log(data);
      }
    })
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
  protected readonly environment = environment;
}
