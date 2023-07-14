import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AppComponent } from './app/app.component';
import { CollectionsComponent } from './stock-management/collections-dashboard/collections/collections.component';
import { CollectionComponent } from './stock-management/collections-dashboard/collection/collection.component';
import { ProductsComponent } from './stock-management/products-dashboard/products/products.component';
import { ProductComponent } from './stock-management/products-dashboard/product/product.component';
import { CategoriesComponent } from './stock-management/categories-dashboard/categories/categories.component';
import { PromosComponent } from './stock-management/promos-dashboard/promos/promos.component';
import { PromoComponent } from './stock-management/promos-dashboard/promo/promo.component';
import { CategoryComponent } from './stock-management/categories-dashboard/category/category.component';
import {Route, RouterLink, RouterOutlet} from "@angular/router";
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditorComponent} from "@tinymce/tinymce-angular";
import { IndexComponent } from './index/index.component';
import { PartnersComponent } from './cms/partners/partners.component';
import { PartnerComponent } from './cms/partner/partner.component';
import { CustomerComponent } from './customer/customer.component';
import { MessagesComponent } from './messages/messages.component';
 import { EditorModule } from '@tinymce/tinymce-angular';
import { FooterOptionsComponent } from './cms/footer-options/footer-options.component';


const routes: Route[]  = [
  {

  },
  {

  }
]
@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionComponent,
    ProductsComponent,
    ProductComponent,
    CategoriesComponent,
    PromosComponent,
    PromoComponent,
    CategoryComponent,
    CustomersComponent,
    ProductsTableComponent,
    CategoriesTableComponent,
    IndexComponent,
    PartnersComponent,
    PartnerComponent,
    CustomerComponent,
    MessagesComponent,
    FooterOptionsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    EditorComponent,
    EditorModule,
    RouterLink
  ]
})
export class DashboardModule { }
