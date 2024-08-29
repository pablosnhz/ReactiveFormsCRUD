import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginTailwindComponent } from "../pages/reactiveTailwind/login-tailwind/login-tailwind.component";


export const routes: Routes = [
  {
    path: '',
    component: LoginTailwindComponent
  }
]

@NgModule({
  declarations: [ LoginTailwindComponent ],
  imports: [
    CommonModule,
    RouterModule,

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class routesTailwindModule { }
