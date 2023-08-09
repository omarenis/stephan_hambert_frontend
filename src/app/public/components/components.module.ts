import {ModuleWithProviders, NgModule} from '@angular/core';
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {ContactComponent} from "./contact/contact.component";
import {ChatComponent} from "./chat/chat.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {SharedModule} from "../../shared/shared.module";
import {MousePositionDirective} from "./mouse-position.directive";


@NgModule({
  declarations: [
    NewsletterComponent,
    ContactComponent,
    ChatComponent,
    CarouselComponent,
    MousePositionDirective
  ],
  imports: [
    SharedModule.forRoot(),
    CarouselModule,
  ],
  exports: [
    SharedModule,
    NewsletterComponent,
    ContactComponent,
    ChatComponent,
    CarouselComponent,
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ComponentsModule,
      providers: []
    }
  }
}
