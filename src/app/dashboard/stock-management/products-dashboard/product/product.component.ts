import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  historyObject,
  olfactionObject,
  Product,
  ProductEssentialInformation,
  productObject
} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";
import {environment} from "../../../../../environments/environment";
import {Collection} from "../../models/Collection";
import {readFileFromInput} from "../../../../services/extra";
import {ActivatedRoute} from "@angular/router";

interface Olfaction {
  title: string;
  image: string | Blob;
  content: string;
  id?: number;
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
  olfactionFormGroup !: FormGroup;
  imagePath !: string;
  historyImagePath !: string;
  olfactionImagePath !: string;
  steps !: string[];
  currentStep !: number;
  collections !: Collection[];
  promos !: Promo[];
  choices !: Choice[];
  product !: Product;
  method !: string;
  historyFormGroup !: FormGroup;

  constructor(private essentialInformationService: AbstractRestService<ProductEssentialInformation>, private categoryService: AbstractRestService<Category>,
              private promoService: AbstractRestService<Promo>, private collectionService: AbstractRestService<Collection>,
              private olfactionService: AbstractRestService<Olfaction>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.formGroup = createFormCreationEditGroup(productObject);
    this.historyFormGroup = createFormCreationEditGroup(historyObject);
    this.olfactionFormGroup = createFormCreationEditGroup(olfactionObject);
    this.currentStep = 0;
    this.steps = ['product information', 'history', 'olfactive'];

    this.collectionService.list(`${environment.url}/collections`).subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
      },
      error: (err) => {
      }
    });
    this.promoService.list(`${environment.url}/promos`).subscribe({
      next: (promos: Promo[]) => {
        this.promos = promos;
      }
    });
    this.activatedRoute.params.subscribe((params) => {
      if (!isNaN(Number(params['id']))) {
        this.essentialInformationService.get(`${environment.url}/produccts`, Number(params['id'])).subscribe({
          next: (product: Product) => {
            this.product = product;
          },
          error: () => {
            console.log('Error')
          }
        })
      }
    })
  }

  addOrEditProductEssentialInformation() {
    console.log('hello');
  }

  submit($event: any) {
    console.log("hello");
  }

  uploadImage(result: string, files: Blob[], imageToChange: string) {
    if (imageToChange === 'productImage') {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
    } else if (imageToChange === 'historyImage') {
      this.historyImagePath = result;
      this.historyFormGroup.controls['image'].setValue(files[0]);
    } else {
      this.olfactionImagePath = result;
      this.olfactionFormGroup.controls['image'].setValue(files[0]);
    }
  }

  getOlfactionData(): void {
    if (this.olfactionFormGroup.controls['title'].getRawValue() === null) {
      if (isNaN(Number(this.product.olfaction))) {
        return;
      }
      this.olfactionService.get(`${environment.url}/olfactions/`, Number(this.product.olfaction)).subscribe({
        next: (olfaction: Olfaction) => {
          this.olfactionFormGroup.controls['title'].setValue(olfaction.title)
        }
      })
    }
  }

  readImage(event: any, imageToChange: string) {
    readFileFromInput(<HTMLInputElement>event.target, (result: string, files: Blob[]) => {
      this.uploadImage(result, files, imageToChange);
    });
  }
}
