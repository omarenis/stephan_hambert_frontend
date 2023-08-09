import {NgModule} from '@angular/core';
import {LockComponent} from "./lock/lock.component";
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SigningComponent} from "./signin/signing.component";
import {SignupComponent} from "./signup/signup.component";
import {VerificationComponent} from "./verification/verification.component";
import {Route, RouterModule} from "@angular/router";
import {SharedModule as GlobalSharedComponent} from "../../shared/shared.module";

const routes: Route[] = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: SigningComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  }
]


@NgModule({
  declarations: [
    LockComponent,
    LoginComponent,
    ResetPasswordComponent,
    SigningComponent,
    SignupComponent,
    VerificationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GlobalSharedComponent.forRoot()
  ]
})
export class AuthModule {
}
