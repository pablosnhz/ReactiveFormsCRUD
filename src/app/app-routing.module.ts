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
        path: '',
        component: HomeComponent
      },
      {
        path: 'forms',
        loadChildren: () => import('./pages/routes/routes.module').then(m => m.routesModule)
      },
      {
        path: 'formsMaterial',
        loadChildren: () => import('./pages/routes/routesMaterial.module').then(m => m.routesMaterialModule)
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
