import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { UserFormComponent } from '../reactiveMaterial/user-form/user-form.component';
import { UserListComponent } from '../reactiveMaterial/user-list/user-list.component';
import { AutoDestroyService } from 'src/app/services/utils/auto-destroy.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditUserComponent } from '../reactiveMaterial/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [ UserFormComponent, UserListComponent, EditUserComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,

    MatIconModule,
    MatFormFieldModule,

    RouterModule.forChild(routes),
  ],
  providers: [AutoDestroyService],
  exports: [RouterModule]
})
export class routesMaterialModule { }
