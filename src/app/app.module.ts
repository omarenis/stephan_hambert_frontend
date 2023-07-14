import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ListElementsComponent} from './test/list-elements/list-elements.component';
import {HttpClientModule} from "@angular/common/http";
import {FormViewTestComponent} from './test/form-view-test/form-view-test.component';
import {PublicComponent} from './layouts/public/public.component';
import {Route, RouterModule} from "@angular/router";
import {ContactComponent} from './screens/public/components/contact/contact.component';
import {LockComponent} from './screens/public/authentication/lock/lock.component';
import {VerificationComponent} from "./screens/public/authentication/verification/verification.component";
import {CrmComponent} from './screens/dashboard/crm/crm.component';
import {CustomersComponent} from './screens/dashboard/crm/customers/customers.component';
import {MessagesComponent} from './screens/dashboard/crm/messages/messages.component';
import {ProfileComponent} from './screens/shared/profile/profile.component';
import {IndexComponent} from "./screens/dashboard/stock-management/index/index.component";
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {PublicIndexComponent} from './screens/public/public-index/public-index.component';
import {
  CollectionFormComponent
} from './screens/dashboard/stock-management/collections/collection-form/collection-form.component';
import {CategoriesComponent} from "./screens/dashboard/components/categories/categories.component";
import {
  CollectionDashboardList
} from './screens/dashboard/stock-management/collections/collections-dashboard-list/collection-dashboard-list.component';
import {
  CategoryListComponent
} from './screens/dashboard/stock-management/categories/category-list/category-list.component';
import {PromoListComponent} from './screens/dashboard/stock-management/promos/promo-list/promo-list.component';
import {DashboardComponent} from "./layouts/dashboard/dashboard.component";
import {ProductsComponent} from "./screens/dashboard/components/products/products.component";
import {
  ProductsDahsboardComponent
} from './screens/dashboard/stock-management/products/products-dahsboard/products-dahsboard.component';
import {
  ProductDashboardFormComponent
} from './screens/dashboard/stock-management/products/product-dashboard-form/product-dashboard-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CardComponent } from './screens/public/public-index/card/card.component';
import { NewsletterComponent } from './screens/public/components/newsletter/newsletter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
 import { EditorModule } from '@tinymce/tinymce-angular';
import {MousePositionDirective} from "./directives/mouse-position.directive";
import { FooterOptionsComponent } from './screens/dashboard/cms/footer-options/footer-options.component';
import {ChatComponent} from "./screens/public/components/chat/chat.component";
import { ProductsCarouselComponent } from './screens/public/components/products-carousel/products-carousel.component';
import { PublicModule } from './public/public.module';
import { DashboardModule } from './dashboard/dashboard.module';
const routes: Route[] = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'public', loadChildren: () => import('./public/public.module').then((module) => module.PublicModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule)
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [

    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MousePositionDirective,
    ListElementsComponent,
    FormViewTestComponent,
    PublicComponent,
    IndexComponent,
    VerificationComponent,
    CustomersComponent,
    ContactComponent,
    LockComponent,
    CrmComponent,
    CustomersComponent,
    MessagesComponent,
    ProfileComponent,
    PublicIndexComponent,
    CategoriesComponent,
    CollectionFormComponent,
    CollectionDashboardList,
    CategoryListComponent,
    PromoListComponent,
    DashboardComponent,
    ProductsComponent,
    ProductsDahsboardComponent,
    ProductDashboardFormComponent,
    CardComponent,
    NewsletterComponent,
    FooterOptionsComponent,
    ChatComponent,
    ProductsCarouselComponent
  ],
  imports: [
    CarouselModule,
    HttpClientModule,
    EditorModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes),
    NgOptimizedImage,
    ReactiveFormsModule,
    PublicModule,
    DashboardModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
