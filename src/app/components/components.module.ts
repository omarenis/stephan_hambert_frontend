import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule.forRoot(),
  ],
  exports: [
    SharedModule,
  ]
})
export class ComponentsModule { }
