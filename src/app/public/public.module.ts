  import {NgModule} from '@angular/core';
  import {Route, RouterModule} from "@angular/router";
  import {AppComponent} from './app/app.component';
  import {CommonModule} from "@angular/common";
  import {ComponentsModule} from "./components/components.module";
import { ProfileComponent } from './profile/profile.component';

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
      ProfileComponent,
    ],
    imports: [
      CommonModule,
      ComponentsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class PublicModule {
  }
