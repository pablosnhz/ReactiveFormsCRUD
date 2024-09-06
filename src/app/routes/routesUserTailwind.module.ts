import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginTailwindComponent } from "../pages/reactiveTailwind/login-tailwind/login-tailwind.component";
import { FormsUsersTailwindComponent } from "../pages/reactiveTailwind/forms-users-tailwind/forms-users-tailwind.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "../core/guards/login.guard";
import { NgxPaginationModule } from "ngx-pagination";


export const routes: Routes = [
  {
    path: '',
    component: LoginTailwindComponent,
  },
  {
    path: 'formtailwinduser',
    component: FormsUsersTailwindComponent,
    canActivate: [AuthGuard],
  }
]


@NgModule({
  declarations: [ LoginTailwindComponent, FormsUsersTailwindComponent ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgxPaginationModule,

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class routesTailwindModule { }
