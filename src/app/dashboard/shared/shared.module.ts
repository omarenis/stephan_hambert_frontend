import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EditorComponent, EditorModule} from "@tinymce/tinymce-angular";
import {FlatpickrModule} from 'angularx-flatpickr';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FullCalendarModule} from "@fullcalendar/angular";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditorModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    EditorComponent,
    NgOptimizedImage,
  ],
  exports: [
    CommonModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FlatpickrModule,
    NgOptimizedImage
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
