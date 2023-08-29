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
    console.log(localStorage.getItem('orderlines'));
    this.paymentFormGroup = new FormGroup({
      firstname: new FormGroup('', [Validators.required]),
      lastname: new FormGroup('', [Validators.required]),
      phone: new FormGroup('', [Validators.required]),
      email: new FormGroup('', [Validators.required]),

    });
    const orderlinesString = localStorage.getItem('orderlines');
    if(orderlinesString !== null)
    {
      this.orderLines = JSON.parse(orderlinesString);
    }
  }

  addQuantityToProduct(event: Event, i: number)
  {
    event.preventDefault();
    this.orderLines[i].quantity ++;
  }

  minusQuantityToOrderLine(i: number)
  {
    this.orderLines[i].quantity --;
  }

  protected readonly environment = environment;
  protected readonly event = event;
}
