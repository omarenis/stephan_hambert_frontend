import {NgModule} from '@angular/core';
import {LockComponent} from "./lock/lock.component";
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SignupComponent} from "./signup/signup.component";
import {VerificationComponent} from "./verification/verification.component";
import {Route, RouterModule} from "@angular/router";
import {SharedModule as GlobalSharedComponent} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  {
    path: 'verification', component: VerificationComponent
  },
  {
    path: 'lock', component: LockComponent
  }
];

@NgModule({
  declarations: [
    LockComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignupComponent,
    VerificationComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    GlobalSharedComponent.forRoot()
  ]
})
export class AuthModule {}
