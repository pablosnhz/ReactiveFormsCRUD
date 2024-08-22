import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridUseComponent } from './pages/ag-grid-use/ag-grid-use.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './pages/reactiveMaterial/user-list/user-list.component';
import { UserFormComponent } from './pages/reactiveMaterial/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridUseComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridAngular,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
