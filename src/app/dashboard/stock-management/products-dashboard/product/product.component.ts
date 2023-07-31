import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product, productObject} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";
import {createFormCreationEditGroup} from "../../../../models/forms";
import {Promo} from "../../models/Promo";
import {Category} from "../../models/Category";
import {environment} from "../../../../../environments/environment";

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
    essentialInformationFormGroup !: FormGroup;
    isCompleted: any;
    formGroup !: FormGroup;
    additionalData !: FormGroup;
    steps !: string[];
    currentStep !: number;
    category_set !: Category[];
    promos !: Promo[];
    choices !: Choice[];

    constructor(private essentialInformationService: AbstractRestService<Product>, private categoryService: AbstractRestService<Category>,
                private promoService: AbstractRestService<Promo>) {
    }

    ngOnInit() {
        this.formGroup = createFormCreationEditGroup(productObject);
        console.log(this.formGroup);
        this.currentStep = 0;
        this.steps = ['product information', 'history', 'olfactive'];
        this.categoryService.list(`${environment.url}/categories`).subscribe({
            next: (response: Category[]) => {
                this.category_set = response;
            },
            error: (err) => {
                console.log(err);
            }
        });
        this.category_set = [
            {
                id: 1,
                title: 'category 1',
                number_products: 0,
                number_purchases: 0,
                total_gain: 0
            }
        ];
        this.choices = [];
        for (const category of this.category_set) {
            this.choices.push(<Choice>{
                value: category.id?.toString(),
                label: category.title
            });
        }
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

