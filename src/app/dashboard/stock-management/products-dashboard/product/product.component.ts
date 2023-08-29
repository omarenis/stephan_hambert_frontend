import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {
  History,
  historyObject, Olfaction,
  olfactionObject,
  Product,
  ProductEssentialInformation,
  productObject
} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup, serializeDataByType} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";
import {environment} from "../../../../../environments/environment";
import {readFileFromInput, setFormGroupValue} from "../../../../services/extra";
import {ActivatedRoute} from "@angular/router";
import {Collection} from "../../../../models/Collection";

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
  currentStep !: number;
  collectionSelected !: Collection | number | string;
  collections !: Collection[];
  promos !: Promo[];
  choices !: Choice[];
  product !: Product;
  method !: string;
  historyFormGroup !: FormGroup;
  message !: string;

  constructor(private essentialInformationService: AbstractRestService<ProductEssentialInformation>, private categoryService: AbstractRestService<Category>,
              private promoService: AbstractRestService<Promo>, private collectionService: AbstractRestService<Collection>,
              private olfactionService: AbstractRestService<Olfaction>, private activatedRoute: ActivatedRoute,
              private historyService: AbstractRestService<History>) {
  }

  ngOnInit() {
    this.formGroup = createFormCreationEditGroup(productObject);
    this.historyFormGroup = createFormCreationEditGroup(historyObject);
    this.olfactionFormGroup = createFormCreationEditGroup(olfactionObject);
    this.currentStep = 0;

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
        this.essentialInformationService.get(`${environment.url}/products`, Number(params['id'])).subscribe({
          next: (product: Product) => {
            this.product = product;
            this.imagePath = environment.originBackend + product.image;
            this.collectionSelected = this.product.collection;
            console.log(this.product);
            this.historyFormGroup.controls['product'].setValue(product.id);
            this.olfactionFormGroup.controls['product'].setValue(product.id);
            setFormGroupValue<ProductEssentialInformation>(this.formGroup, productObject, product);
            this.formGroup.controls['image'].setValidators([]);
          },
          error: () => {
          }
        })
      }
    })
  }

  addOrEditProductEssentialInformation(event: Event) {
    event.preventDefault();
  }

  submit($event: Event) {
    $event.preventDefault();
    console.log(this.formGroup.value);
    const data = serializeDataByType<Product>(this.formGroup.value, 'multipart/form-data');
    const observable = this.product !== undefined ? this.essentialInformationService.put(`${environment.url}/products`, Number(this.product.id), data) : this.essentialInformationService.create(`${environment.url}/products`, data);
    observable.subscribe({
      next: (product: ProductEssentialInformation) => {
        this.message = `the product is successfully ${this.product !== undefined ? 'modified' : 'created'}`
        this.product = product;
        this.historyFormGroup.controls['product'].setValue(product.id);
        this.olfactionFormGroup.controls['product'].setValue(product.id);
        this.imagePath = environment.originBackend + product.image;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  uploadImage(result: string, files: Blob[], imageToChange: string) {
    if (imageToChange === 'productImage') {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
    } else if (imageToChange === 'historyImage') {
      this.historyImagePath = result;
      console.log(this.historyImagePath);
      this.historyFormGroup.controls['image'].setValue(files[0]);
    } else {
      console.log(result);
      this.olfactionImagePath = result;
      this.olfactionFormGroup.controls['image'].setValue(files[0]);
    }
  }

  getOlfactionData(): void {
    this.currentStep = 2;
    if (this.product.olfaction !== null) {
      this.olfactionService.get(`${environment.url}/stock-management/olfactions`, Number(this.product.olfaction)).subscribe({
        next: (olfaction: Olfaction) => {
          this.olfactionFormGroup.controls['title'].setValue(olfaction.title);
          this.olfactionFormGroup.controls['image'].removeValidators([Validators.required]);
          this.olfactionFormGroup.controls['content'].setValue(olfaction.content);
          this.olfactionFormGroup.removeValidators([Validators.required]);
          this.olfactionImagePath = environment.originBackend + olfaction.image;
        }
      });
    }
  }

  readImage(event: any, imageToChange: string) {
    readFileFromInput(<HTMLInputElement>event.target, (result: string, files: Blob[]) => {
      this.uploadImage(result, files, imageToChange);
    });
  }

  getHistory() {
    this.currentStep = 1;
    if (this.product.history !== undefined && this.product.history !== null) {
      this.historyService.get(`${environment.url}/stock-management/histories`, Number(this.product.history)).subscribe({
        next: (response: History) => {
          this.historyFormGroup.controls['title'].setValue(response.title);
          this.historyFormGroup.controls['content'].setValue(response.content);
          this.historyImagePath = environment.originBackend + response.image;
          this.historyFormGroup.controls['image'].setValidators([]);
        },
        error: () => {
        }
      });
    }
  }

  createOrEditHistory(event: Event) {
    event.preventDefault();
    console.log(this.historyFormGroup.value);
    const data = serializeDataByType<History | FormData>(this.historyFormGroup.value, 'multipart/form-data');
    const subscriber = typeof this.product.history === 'number' ? this.historyService.put(`${environment.url}/stock-management/histories`, Number(this.product.history), data) : this.historyService.create(`${environment.url}/stock-management/histories`, data);
    subscriber.subscribe({
      next: (response) => {
        setFormGroupValue(this.historyFormGroup, historyObject, response);
        this.historyImagePath = environment.originBackend + response.image;
      }
    })
  }

  protected readonly Number = Number;

  createOrEditOlfaction(event: Event) {
    event.preventDefault();
    const data: FormData | Olfaction = serializeDataByType<Olfaction | FormData>(this.olfactionFormGroup.value, 'multipart/form-data');
    const subscriber = typeof this.product.olfaction === 'number' ? this.olfactionService.put(`${environment.url}/stock-management/olfactions`, Number(this.product.olfaction), data) : this.historyService.create(`${environment.url}/stock-management/olfactions`, data);
    subscriber.subscribe({
      next: (response) => {
        setFormGroupValue(this.historyFormGroup, historyObject, response);
        this.olfactionImagePath = environment.originBackend + response.image;
      }
    })
  }
}
