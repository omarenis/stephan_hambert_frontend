  import {NgModule} from '@angular/core';
  import {Route, RouterModule} from "@angular/router";
  import {AppComponent} from './app/app.component';
  import {ProfileComponent} from "../components/profile/profile.component";
  import {CommonModule} from "@angular/common";

  const routes: Route[] = [
    {
      path: '', component: AppComponent, children: [
        {
          path: '', loadChildren: () => import('./pages/pages.module').then((module) => module.PagesModule)
        },
        {
          path: 'auth', loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
        },
        {
          path: 'ecommerce',
          loadChildren: () => import('./ecommerce/ecommerce.module').then((module) => module.EcommerceModule)
        },
        {
          path: 'profile', component: ProfileComponent
        }
      ]
    },
  ];

  @NgModule({
    declarations: [
      AppComponent,
      ProfileComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ]
  })
  export class PublicModule {
  }
