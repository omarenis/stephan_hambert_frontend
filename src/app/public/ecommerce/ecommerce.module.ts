import { NgModule } from '@angular/core';
import {BillingComponent} from "./billing/billing.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ComponentsModule} from "../components/components.module";
import {LightboxModule} from "ngx-lightbox";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: 'products', component: ProductListComponent,
  },
  {
    path: 'products/:id', component: ProductPageComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'billing', component: BillingComponent
  }
]
@NgModule({
  declarations: [
    BillingComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductPageComponent,
    CartComponent,
  ],
  imports: [
    ComponentsModule.forRoot(),
    LightboxModule,
    RouterModule.forChild(routes)
  ],
})
export class EcommerceModule { }
