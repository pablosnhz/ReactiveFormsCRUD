import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from '../pages/reactiveMaterial/user-form/user-form.component';
import { UserListComponent } from '../pages/reactiveMaterial/user-list/user-list.component';
import { EditUserComponent } from '../pages/reactiveMaterial/edit-user/edit-user.component';
import { AddEditUserComponent } from '../pages/reactiveMaterial/add-edit-user/add-edit-user.component';
import { LoginUserComponent } from '../pages/reactiveMaterial/login-user/login-user.component';

import { AutoDestroyService } from 'src/app/services/utils/auto-destroy.service';
import { ReactiveFormsModule } from '@angular/forms';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import { authGuard } from 'src/app/core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginUserComponent,
    canActivate: [authGuard],
  },
  {
    path: 'form',
    component: UserFormComponent,
    // pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ UserFormComponent, UserListComponent, EditUserComponent, AddEditUserComponent, LoginUserComponent ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,

    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    MatPaginatorModule,

    RouterModule.forChild(routes),
  ],
  providers: [AutoDestroyService,],
  exports: [RouterModule]
})
export class routesMaterialModule { }
