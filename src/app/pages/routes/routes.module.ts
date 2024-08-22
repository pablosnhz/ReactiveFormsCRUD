import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgGridUseComponent } from '../ag-grid-use/ag-grid-use.component';
import { AgGridAngular } from 'ag-grid-angular';

const routes: Routes = [
  {
    path: '',
    component: AgGridUseComponent,
  },
];

@NgModule({
  declarations: [ AgGridUseComponent ],
  imports: [
    CommonModule,
    RouterModule,

    RouterModule.forChild(routes),
    AgGridAngular,
  ],
  exports: [RouterModule]
})
export class routesModule { }
