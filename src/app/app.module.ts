import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ListElementsComponent} from './test/list-elements/list-elements.component';
import {HttpClientModule} from "@angular/common/http";
import {FormViewTestComponent} from './test/form-view-test/form-view-test.component';
import {Route, RouterModule} from "@angular/router";
import {ProfileComponent} from './screens/shared/profile/profile.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MousePositionDirective} from "./public/mouse-position.directive";
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
];

@NgModule({
  declarations: [
    AppComponent,
    MousePositionDirective,
    ListElementsComponent,
    FormViewTestComponent,
    ProfileComponent,
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
