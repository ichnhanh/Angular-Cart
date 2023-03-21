import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import {RouterModule, Routes} from "@angular/router";

const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    UserModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
