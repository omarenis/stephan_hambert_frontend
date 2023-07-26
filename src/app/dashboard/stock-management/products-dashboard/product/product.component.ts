import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";

const additionalData = {
  product: {type: 'foreign_key', required: true },
  first_image: {type: 'file', required: true },
  second_image: {type: 'file', required: true },
  third_image: {type: 'file', required: true}
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  essentialInformationFormGroup !: FormGroup;
  isCompleted: any;
  formGroup !: FormGroup;
  additionalData !: FormGroup;
  steps !: string[];
  currentStep !: number;
  categories !: Category[];
  promos !: Promo[];
  constructor(private essentialInformationService: AbstractRestService<Product>, private additionalInformation: AbstractRestService<>) {
  }

  ngOnInit() {
    this.formGroup = createFormCreationEditGroup(productObject);
    this.currentStep = 0;
    this.steps = ['product information', 'history', 'olfactive'];

  }

  onStep2Next($event: any) {
    console.log($event);
  }

  nextStep($event: any) {

  }

  onComplete($event: any) {

  }

  finishFunction() {


  }

  readImage($event: Event) {

  }

  submit($event: any) {

  }

}
