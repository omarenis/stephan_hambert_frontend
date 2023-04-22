import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ListElementsComponent} from './test/list-elements/list-elements.component';
import {HttpClientModule} from "@angular/common/http";
import {FormViewTestComponent} from './test/form-view-test/form-view-test.component';
import {PublicComponent} from './layouts/public/public.component';
import {DashboardComponent} from './layouts/dahsboard/dashboard.component';
import {Route, RouterModule} from "@angular/router";
import {IndexComponent} from "./screens/dashboard/index/index.component";
import { ProductsComponent } from './screens/public/ecommerce/products/products.component';
import { ProductPageComponent } from './screens/public/ecommerce/product-page/product-page.component';
import { BillingComponent } from './screens/public/ecommerce/billing/billing.component';
import { ContactComponent } from './screens/public/components/contact/contact.component';
import { LockComponent } from './screens/public/authentication/lock/lock.component';
import { LockBasicComponent } from './screens/public/authentication/lock/lock-basic/lock-basic.component';
import { LockCoverComponent } from './screens/public/authentication/lock/lock-cover/lock-cover.component';
import { LockIllustrationComponent } from './screens/public/authentication/lock/lock-illustration/lock-illustration.component';
import {SigninComponent} from "./screens/public/authentication/signin/signin.component";
import {SignupComponent} from "./screens/public/authentication/signup/signup.component";
import {ResetPasswordComponent} from "./screens/public/authentication/reset-password/reset-password.component";
import {VerificationComponent} from "./screens/public/authentication/verification/verification.component";
import {SigninCoverComponent} from "./screens/public/authentication/signin/signin-cover/signin-cover.component";
import {SigninBasicComponent} from "./screens/public/authentication/signin/signin-basic/signin-basic.component";
import {
  SigninIllustrationComponent
} from "./screens/public/authentication/signin/signin-illustration/signin-illustration.component";
import {SignupCoverComponent} from "./screens/public/authentication/signup/signup-cover/signup-cover.component";
import {SignupBasicComponent} from "./screens/public/authentication/signup/signup-basic/signup-basic.component";
import {
  SignupIllustrationComponent
} from "./screens/public/authentication/signup/signup-illustration/signup-illustration.component";
import {
  VerificationCoverComponent
} from "./screens/public/authentication/verification/verification-cover/verification-cover.component";
import {
  VerificationBasicComponent
} from "./screens/public/authentication/verification/verification-basic/verification-basic.component";
import {
  VerificationIllustrationComponent
} from "./screens/public/authentication/verification/verification-illustration/verification-illustration.component";
import { CategoriesComponent } from './screens/dashboard/categories/categories.component';
import { PromosComponent } from './screens/dashboard/promos/promos.component';
import { StockManagementComponent } from './screens/dashboard/stock-management/stock-management.component';
import { CrmComponent } from './screens/dashboard/crm/crm.component';
import { CustomersComponent } from './screens/dashboard/crm/customers/customers.component';
import { MessagesComponent } from './screens/dashboard/crm/messages/messages.component';
import { ProfileComponent } from './screens/shared/profile/profile.component';

const routes: Route[] = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'public', component: PublicComponent, children: [
      {
        path: '', redirectTo: '/public/index', pathMatch: 'full'
      },
      {
        path: 'index', component: PublicComponent
      },
      {
        path: 'signup', component: SignupComponent, children: []
      }
    ]
  },
  {
    path: 'dahsboard', component: DashboardComponent, children: [
      {
        path: '', redirectTo: '/dashboard/index', pathMatch: 'full'
      },
      {
        path: 'index', component: IndexComponent
      },
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ListElementsComponent,
    FormViewTestComponent,
    PublicComponent,
    DashboardComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    VerificationComponent,
    SigninCoverComponent,
    SigninBasicComponent,
    SigninIllustrationComponent,
    SignupCoverComponent,
    SignupBasicComponent,
    SignupIllustrationComponent,
    VerificationCoverComponent,
    VerificationBasicComponent,
    VerificationIllustrationComponent,
    ProductsComponent,
    ProductPageComponent,
    BillingComponent,
    ContactComponent,
    LockComponent,
    LockBasicComponent,
    LockCoverComponent,
    LockIllustrationComponent,
    CategoriesComponent,
    PromosComponent,
    StockManagementComponent,
    CrmComponent,
    CustomersComponent,
    MessagesComponent,
    ProfileComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
