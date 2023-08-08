import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgOptimizedImage,
    ],
    exports: [
        ReactiveFormsModule,
        CommonModule,
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
