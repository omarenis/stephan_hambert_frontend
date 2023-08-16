import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {historyObject, Product, ProductEssentialInformation, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";
import {environment} from "../../../../../environments/environment";
import {Collection} from "../../models/Collection";
import {readFileFromInput} from "../../../../services/extra";

interface Olfaction {

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
  imagePath !: string;
  steps !: string[];
  currentStep !: number;
  category_set !: Category[];
  collections !: Collection[];
  promos !: Promo[];
  choices !: Choice[];
  product !: Product;
  method !: string;
  historyFormGroup !: FormGroup;

  constructor(private essentialInformationService: AbstractRestService<ProductEssentialInformation>, private categoryService: AbstractRestService<Category>,
              private promoService: AbstractRestService<Promo>, private collectionService: AbstractRestService<Collection>,
              private olfaction: AbstractRestService<Olfaction>) {
  }

  ngOnInit() {
    this.formGroup = createFormCreationEditGroup(productObject);
    this.historyFormGroup = createFormCreationEditGroup(historyObject);
    this.currentStep = 0;
    this.steps = ['product information', 'history', 'olfactive'];
    this.collectionService.list(`${environment.url}/collections`).subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
        console.log(this.collections);
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

  addOrEditProductEssentialInformation() {

  }

  submit($event: any) {

  }

  uploadImage(result: string, files: Blob[], i: number) {
    console.log(i);
    if (i === -1) {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
    } else {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
    }
  }

  readImage(event: any, i: number) {
    readFileFromInput(<HTMLInputElement>event.target, (result: string, files: Blob[]) => {
      this.uploadImage(result, files, i);
    });
  }
}
