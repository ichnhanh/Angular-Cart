import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./container/list/list.component";
import {RouterModule, Routes} from "@angular/router";
import { ListCardComponent } from './component/list-card/list-card.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { DetailComponent } from './container/detail/detail.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'items/:id',
    component: DetailComponent
  },
  {
    path: '**',
    component: ListComponent
  }
]

@NgModule({
  declarations: [
    ListComponent,
    ListCardComponent,
    DetailProductComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(UserRoutes),
  ]
})
export class UserModule { }
