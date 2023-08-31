import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import '@angular/localize/init';
import {Route, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
const routes: Route[] = [
  {
    path: '', component: AppComponent
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
  ],
  imports: [
      HttpClientModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
