import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { UserFormComponent } from '../reactiveMaterial/user-form/user-form.component';
import { UserListComponent } from '../reactiveMaterial/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [ UserFormComponent, UserListComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class routesMaterialModule { }
