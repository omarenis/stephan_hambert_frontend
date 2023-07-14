import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterLink, RouterModule, RouterOutlet, ROUTES} from "@angular/router";
import {PublicIndexComponent} from "../screens/public/public-index/public-index.component";
import {AppComponent} from './app/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IndexComponent } from './index/index.component';
import {ProductListComponent} from "./ecommerce/product-list/product-list.component";
import {ProductPageComponent} from "./ecommerce/product-page/product-page.component";
import {CartComponent} from "./ecommerce/cart/cart.component";
import {CheckoutComponent} from "./ecommerce/checkout/checkout.component";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import {BillingComponent} from "./ecommerce/billing/billing.component";
import {SigningComponent} from "./auth/signin/signing.component";


const routes: Route[] = [
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
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      }
    ]
  }];

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
    SigningComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ]
})
export class PublicModule {
}
