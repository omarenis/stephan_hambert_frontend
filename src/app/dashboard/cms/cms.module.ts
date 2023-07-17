import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route} from "@angular/router";
import {PartnersComponent} from './partners/partners.component';
import {PartnerComponent} from './partner/partner.component';
import {FooterOptionsComponent} from "./footer-options/footer-options.component";
import {SharedModule} from "../shared/shared.module";


const routes: Route[] = [
  {
    path: 'partners', component: PartnersComponent
  },
  {
    path: 'partner', component: PartnerComponent
  },
  {
    path: 'general-settings', component: FooterOptionsComponent
  }
];

@NgModule({
  declarations: [

    PartnersComponent,
    PartnerComponent,
    FooterOptionsComponent,
  ],
  imports: [
    SharedModule.forRoot()
  ]
})
export class CmsModule {
}
