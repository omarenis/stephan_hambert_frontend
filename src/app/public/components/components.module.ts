import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {ContactComponent} from "./contact/contact.component";
import {ChatComponent} from "./chat/chat.component";
import {CarouselComponent} from "./carousel/carousel.component";


@NgModule({
  declarations: [
    NewsletterComponent,
    ContactComponent,
    ChatComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NewsletterComponent,
    ContactComponent,
    ChatComponent,
    CarouselComponent
  ]
})
export class ComponentsModule {
}
