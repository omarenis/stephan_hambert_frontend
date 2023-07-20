import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app/app.component';
import {Route, RouterModule} from "@angular/router";
import { CustomersComponent } from './components/customers/customers.component';
import { IndexComponent } from './index/index.component';


const routes: Route[]  = [
  {
    path: '', component: AppComponent, children: [
      {
        path: 'stock-management', loadChildren: () => import('./stock-management/stock-management.module').then((module) => module.StockManagementModule)
      },
      {
        path: 'crm', loadChildren: () => import('./crm/crm.module').then((module) => module.CrmModule)
      },
      {
        path: 'cms', loadChildren: () => import('./cms/cms.module').then((module) => module.CmsModule)
      },
      {
        path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then((module) => module.EcommerceModule)
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [

  ]
})
export class DashboardModule { }
