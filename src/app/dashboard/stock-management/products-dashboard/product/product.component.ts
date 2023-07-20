import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product} from "../../models/Product";
import {AbstractRestService} from "../../../../services/genericservice";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  essetialInformationFormGroup !: FormGroup;
  constructor(private essentialInformationService: AbstractRestService<Product>) {
  }

  ngOnInit() {

  }
}
