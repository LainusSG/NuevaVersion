import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXCELTOANGULARComponent } from './excel-to-angular/excel-to-angular.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatTableModule} from '@angular/material/table';
import { ExcelToAmgular2Component } from './excel-to-amgular2/excel-to-amgular2.component';

@NgModule({
  declarations: [
    AppComponent,
    EXCELTOANGULARComponent,
    ExcelToAmgular2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
