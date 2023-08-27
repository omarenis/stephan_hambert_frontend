import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../models/OrderLine";
import {environment} from "../../../../environments/environment";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  orderLines: OrderLine[] = [];
  cartFormGroup !: FormGroup;
  paymentFormGroup !: FormGroup;
  ngOnInit() {
    this.paymentFormGroup = new FormGroup({
      firstname: new FormGroup('', [Validators.required]),
      lastname: new FormGroup('', [Validators.required]),
      phone: new FormGroup('', [Validators.required]),
      email: new FormGroup('', [Validators.required]),
      
    })
    this.orderLines = [
      {
        product: {
          title: 'Crying of Evil',
          description: '',
          image: '/assets/img/products/product1.png',
          slug: '(',
          collection: ''
        },
        quantity: 0,
        totalHt: 0,
        date_order: '',
      }
    ];
  }

  addQuantityToProduct(i: number)
  {
    this.orderLines[i].quantity ++;
  }

  minusQuantityToOrderLine(i: number)
  {
    this.orderLines[i].quantity --;
  }

  protected readonly environment = environment;
}
