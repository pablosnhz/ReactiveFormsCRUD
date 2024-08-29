import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'forms',
        loadChildren: () => import('./routes/routes.module').then(m => m.routesModule)
      },
      {
        path: 'formsmaterial',
        loadChildren: () => import('./routes/routesMaterial.module').then(m => m.routesMaterialModule)
      },
      {
        path: 'formstailwind',
        loadChildren: () => import('./routes/routesUserTailwind.module').then(m => m.routesTailwindModule)
      }
    ]
  }
];

@NgModule({
  declarations: [ HomeComponent, MainLayoutComponent ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
