import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EditorModule} from "@tinymce/tinymce-angular";
import {FlatpickrModule} from 'angularx-flatpickr';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FullCalendarModule} from "@fullcalendar/angular";
import {AlertComponent} from '../alert/alert.component';


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FlatpickrModule,
    NgOptimizedImage,
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
