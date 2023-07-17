import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {CustomersComponent} from "./customers/customers.component";
import {MessagesComponent} from "./messages/messages.component";
import {SharedModule} from "../shared/shared.module";


const routes: Route[] = [
  {
    path: 'customers', component: CustomerComponent
  },
  {
    path: 'customers/:id', component: CustomersComponent
  },
  {
    path: 'messages', component: MessagesComponent
  }
];
@NgModule({
  declarations: [
    CustomerComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CrmModule { }
