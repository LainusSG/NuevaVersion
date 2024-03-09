import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraficasComponent } from './graficas/graficas.component';
const routes: Routes = [
{ path: '1', component: GraficasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
