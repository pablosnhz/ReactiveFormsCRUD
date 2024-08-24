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
import { MatButtonModule } from '@angular/material/button';
import { AddEditUserComponent } from '../reactiveMaterial/add-edit-user/add-edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [ UserFormComponent, UserListComponent, EditUserComponent, AddEditUserComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,

    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    ReactiveFormsModule,


    RouterModule.forChild(routes),
  ],
  providers: [AutoDestroyService],
  exports: [RouterModule]
})
export class routesMaterialModule { }
