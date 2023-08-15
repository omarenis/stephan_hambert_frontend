import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product, ProductEssentialInformation, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";
import {environment} from "../../../../../environments/environment";
import {Collection} from "../../models/Collection";
interface Olfaction
{

}
interface Choice {
  value: string;
  label: string;
}

const additionalData = {
  product: {type: 'foreign_key', required: true},
  first_image: {type: 'file', required: true},
  second_image: {type: 'file', required: true},
  third_image: {type: 'file', required: true}
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  formGroup !: FormGroup;
  steps !: string[];
  currentStep !: number;
  category_set !: Category[];
  collections !: Collection[];
  promos !: Promo[];
  choices !: Choice[];
  product !: Product;
  method !: string;
  constructor(private essentialInformationService: AbstractRestService<ProductEssentialInformation>, private categoryService: AbstractRestService<Category>,
              private promoService: AbstractRestService<Promo>, private collectionService: AbstractRestService<Collection>,
              private olfaction: AbstractRestService<Olfaction>) {
  }

  ngOnInit() {
    this.formGroup = createFormCreationEditGroup(productObject);
    this.currentStep = 0;
    this.steps = ['product information', 'history', 'olfactive'];
    this.collectionService.list(`${environment.url}/collections`).subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.promoService.list(`${environment.url}/promos`).subscribe({
      next: (promos: Promo[]) => {
        this.promos = promos;
      }
    });
  }

  addOrEditProductEssentialInformation()
  {

  }

  submit($event: any) {

  }

  readImage($event: Event) {

  }
}
