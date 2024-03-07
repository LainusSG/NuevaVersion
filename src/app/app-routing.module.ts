import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EXCELTOANGULARComponent } from './excel-to-angular/excel-to-angular.component';
import { ExcelToAmgular2Component } from './excel-to-amgular2/excel-to-amgular2.component';

const routes: Routes = [
  { path:'1', component: EXCELTOANGULARComponent},
  { path:'2', component: ExcelToAmgular2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
