import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterLink, RouterModule} from "@angular/router";
import {PartnersComponent} from './partners/partners.component';
import {PartnerComponent} from './partner/partner.component';
import {FooterOptionsComponent} from "./footer-options/footer-options.component";
import {SharedModule} from "../shared/shared.module";
import { PresentsComponent } from './presents/presents.component';
import { PresentComponent } from './present/present.component';
import {EditorComponent} from "@tinymce/tinymce-angular";
import { NewsletterComponent } from './newsletter/newsletter.component';


const routes: Route[] = [
  {
    path: 'partners', component: PartnersComponent
  },
  {
    path: 'partner', component: PartnerComponent
  },
  {
    path: 'newsletter', component: NewsletterComponent
  },
  {
    path: 'presents', component: PresentsComponent
  },
  {
    path: 'presents/:id', component: PresentComponent
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
    PresentsComponent,
    PresentComponent,
    NewsletterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    EditorComponent,
    RouterLink
  ]
})
export class CmsModule {
}
