import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider
} from 'angularx-social-login';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ListElementsComponent} from './test/list-elements/list-elements.component';
import {HttpClientModule} from "@angular/common/http";
import {FormViewTestComponent} from './test/form-view-test/form-view-test.component';
import {PublicComponent} from './layouts/public/public.component';
import {Route, RouterModule} from "@angular/router";
import {ProductPageComponent} from './screens/public/ecommerce/product-page/product-page.component';
import {BillingComponent} from './screens/public/ecommerce/billing/billing.component';
import {ContactComponent} from './screens/public/components/contact/contact.component';
import {LockComponent} from './screens/public/authentication/lock/lock.component';
import {SigningComponent} from "./screens/public/authentication/signin/signing.component";
import {SignupComponent} from "./screens/public/authentication/signup/signup.component";
import {ResetPasswordComponent} from "./screens/public/authentication/reset-password/reset-password.component";
import {VerificationComponent} from "./screens/public/authentication/verification/verification.component";
import {CrmComponent} from './screens/dashboard/crm/crm.component';
import {CustomersComponent} from './screens/dashboard/crm/customers/customers.component';
import {MessagesComponent} from './screens/dashboard/crm/messages/messages.component';
import {ProfileComponent} from './screens/shared/profile/profile.component';
import {IndexComponent} from "./screens/dashboard/stock-management/index/index.component";
import {NgOptimizedImage} from "@angular/common";
import {ProductListComponent} from "./screens/public/ecommerce/product-list/product-list.component";
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
        path: 'index', component: PublicIndexComponent
      },
      {
        path: 'auth', children: [
          {
            path: 'signup', component: SignupComponent
          },
          {
            path: 'login', component: SigningComponent
          },
          {
            path: 'reset-password', component: ResetPasswordComponent
          },
        ]
      },
      {
        path: 'ecommerce', children: [
          {
            path: 'products', component: ProductListComponent
          },
          {
            path: 'products/:id', component: ProductPageComponent
          }
        ]
      },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: '', redirectTo: '/dashboard/index', pathMatch: 'full'
      },
      {
        path: 'index', component: IndexComponent
      },
      {
        path: 'collections', children: [
          {
            path: '', component: CollectionDashboardList
          },
          {
            path: ':id', component: CollectionFormComponent
          }
        ]
      },
      {
        path: 'categories', component: CategoryListComponent
      },
      {
        path: 'promos', component: PromoListComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ListElementsComponent,
    FormViewTestComponent,
    PublicComponent,
    IndexComponent,
    SigningComponent,
    SignupComponent,
    ResetPasswordComponent,
    VerificationComponent,
    CustomersComponent,
    ProductPageComponent,
    BillingComponent,
    ContactComponent,
    LockComponent,
    CrmComponent,
    CustomersComponent,
    MessagesComponent,
    ProfileComponent,
    ProductListComponent,
    PublicIndexComponent,
    CategoriesComponent,
    CollectionFormComponent,
    CollectionDashboardList,
    CategoryListComponent,
    PromoListComponent,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    NgOptimizedImage,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          /*          {
                      id: GoogleLoginProvider.PROVIDER_ID,
                      provider: new GoogleLoginProvider(
                        '535308010302-0m8f4elln3ooa0rqhvhhgebd1ei8hk3q.apps.googleusercontent.com'
                      )
                    },*/
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('258734885752449')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
