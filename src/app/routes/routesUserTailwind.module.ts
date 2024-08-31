import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginTailwindComponent } from "../pages/reactiveTailwind/login-tailwind/login-tailwind.component";
import { FormsUsersTailwindComponent } from "../pages/reactiveTailwind/forms-users-tailwind/forms-users-tailwind.component";


export const routes: Routes = [
  {
    path: '',
    component: LoginTailwindComponent,
  },
  {
    path: 'formtailwinduser',
    component: FormsUsersTailwindComponent
  }
]


@NgModule({
  declarations: [ LoginTailwindComponent, FormsUsersTailwindComponent ],
  imports: [
    CommonModule,
    RouterModule,

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class routesTailwindModule { }
