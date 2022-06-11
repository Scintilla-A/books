import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../shared/store/update';
import { metaReducers } from '../shared/store/metareducer';
import {  MatDialogModule } from '@angular/material/dialog';
import { AddRowComponent } from './modal/add-row/add-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRowComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
   
    StoreModule.forRoot(reducers, { metaReducers }),
  
  ],
  exports: [MaterialModule],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'outline' },
  }, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
