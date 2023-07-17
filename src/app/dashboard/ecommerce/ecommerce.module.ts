import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EcommerceModule { }
