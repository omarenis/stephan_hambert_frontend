import { NgModule } from '@angular/core';
import {SharedModule as GlobalSharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    GlobalSharedModule.forRoot()
  ]
})
export class SharedModule { }
