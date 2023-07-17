import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    FullCalendarModule,
  ],
  exports: [
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FlatpickrModule
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
