import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BillingComponent} from "./billing/billing.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {SharedModule} from "../shared/shared.module";
import { SharedModule as GlobalSharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    BillingComponent,
    CartComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductPageComponent
  ],
  imports: [
    GlobalSharedModule.forRoot(),
    SharedModule
  ]
})
export class EcommerceModule { }
