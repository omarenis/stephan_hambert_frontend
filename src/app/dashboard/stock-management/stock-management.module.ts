import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, NgIf} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {CategoriesComponent} from "./categories-dashboard/categories/categories.component";
import {CategoryComponent} from "./categories-dashboard/category/category.component";
import {CollectionsComponent} from "./collections-dashboard/collections/collections.component";
import {CollectionComponent} from "./collections-dashboard/collection/collection.component";
import {PromosComponent} from "./promos-dashboard/promos/promos.component";
import {PromoComponent} from "./promos-dashboard/promo/promo.component";
import { AppComponent } from './app/app.component';
import {CategoriesTableComponent} from "./components/categories-table/categories-table.component";
import {ProductsTableComponent} from "./components/products-table/products-table.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditorComponent} from "@tinymce/tinymce-angular";
import {SharedModule} from "../shared/shared.module";


const routes: Route[] = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'categories/:id', component: CategoryComponent
  },
  {
    path: 'collections', component: CollectionsComponent
  },
  {
    path: 'collections/:id', component: CollectionComponent
  },
  {
    path: 'promos', component: PromosComponent
  },
  {
    path: 'promos/:id', component: PromoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    CollectionComponent,
    CollectionsComponent,
    PromosComponent,
    PromoComponent,
    CategoriesTableComponent,
    ProductsTableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    DatePipe,
    NgIf
  ]
})
export class StockManagementModule {
}
