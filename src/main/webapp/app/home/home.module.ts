import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CkeditorSharedModule } from '../shared';
import { HOME_ROUTE, HomeComponent } from './';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
    imports: [
        CkeditorSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true }),
        BrowserModule, 
        CKEditorModule, 
        FormsModule
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CkeditorHomeModule {}
