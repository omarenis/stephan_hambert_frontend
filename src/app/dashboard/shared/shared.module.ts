import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EditorModule} from "@tinymce/tinymce-angular";
import {FlatpickrModule} from 'angularx-flatpickr';
import {FullCalendarModule} from "@fullcalendar/angular";
import {AlertComponent} from '../alert/alert.component';
import {SharedModule as GlobalSharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    GlobalSharedModule.forRoot()
  ],
  exports: [
    FullCalendarModule,
    FlatpickrModule,
    NgOptimizedImage,
    GlobalSharedModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
