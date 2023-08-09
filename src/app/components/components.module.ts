import { NgModule } from '@angular/core';
import {ProfileComponent} from "./profile/profile.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    SharedModule.forRoot(),
  ],
  exports: [
    SharedModule,
    ProfileComponent
  ]
})
export class ComponentsModule { }
