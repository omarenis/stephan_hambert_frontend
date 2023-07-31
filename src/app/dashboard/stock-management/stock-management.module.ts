import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {SharedModule} from "../shared/shared.module";
import {EditorModule} from "@tinymce/tinymce-angular";
import {ProductsComponent} from "./products-dashboard/products/products.component";
import {ProductComponent} from "./products-dashboard/product/product.component";
import {NbChoicesModule} from "nb-choices";
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
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/:id', component: ProductComponent
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
    ProductsTableComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    NbChoicesModule,

  ]
})
export class StockManagementModule {}
