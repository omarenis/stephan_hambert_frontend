import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Route, RouterModule, RouterOutlet} from "@angular/router";
import {AppComponent} from './app/app.component';
import {ChatComponent} from './components/chat/chat.component';
import {ContactComponent} from './components/contact/contact.component';
import {NewsletterComponent} from './components/newsletter/newsletter.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {IndexComponent} from './index/index.component';
import {ProductListComponent} from "./ecommerce/product-list/product-list.component";
import {ProductPageComponent} from "./ecommerce/product-page/product-page.component";
import {CartComponent} from "./ecommerce/cart/cart.component";
import {CheckoutComponent} from "./ecommerce/checkout/checkout.component";
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {BillingComponent} from "./ecommerce/billing/billing.component";
import {SigningComponent} from "./auth/signin/signing.component";
import {LockComponent} from './auth/lock/lock.component';
import {VerificationComponent} from './auth/verification/verification.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {ReactiveFormsModule} from "@angular/forms";
import {MousePositionDirective} from "./mouse-position.directive";
import {CollectionsComponent} from './collections/collections.component';
import {PhilosophieComponent} from './philosophie/philosophie.component';
import {Angular2PhotoswipeModule} from "angular2_photoswipe";

const routes: Route[] = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'index', component: IndexComponent
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
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ContactComponent,
    NewsletterComponent,
    CarouselComponent,
    BillingComponent,
    CartComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductPageComponent,
    IndexComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignupComponent,
    SigningComponent,
    LockComponent,
    VerificationComponent,
    MousePositionDirective,
    CollectionsComponent,
    PhilosophieComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routes),
    CarouselModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    Angular2PhotoswipeModule
  ]
})
export class PublicModule {
}
