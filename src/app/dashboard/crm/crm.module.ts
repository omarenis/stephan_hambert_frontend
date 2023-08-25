import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {CustomersComponent} from "./customers/customers.component";
import {MessagesComponent} from "./messages/messages.component";
import {SharedModule} from "../shared/shared.module";


const routes: Route[] = [
  {
    path: 'customers', component: CustomersComponent
  },
  {
    path: 'customers/:id', component:   CustomerComponent
  },
  {
    path: 'messages', component: MessagesComponent
  }
];
@NgModule({
  declarations: [
    CustomerComponent,
    CustomersComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CrmModule { }
