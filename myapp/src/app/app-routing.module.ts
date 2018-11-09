import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order/order.component';
import {HistoryorderlistComponent} from './historyorderlist/historyorderlist.component';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {LoginComponent} from './login/login.component';
import {AfterloginComponent} from './afterlogin/afterlogin.component';
import {HeadComponent} from './head/head.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },

  { path: 'Afterlogin', component: AfterloginComponent, children:

      [
         { path: '', redirectTo: '/Afterlogin/Order', pathMatch: 'full' } ,
         { path: 'Order', component: OrderComponent , pathMatch: 'full' },
         { path: 'Shoppingcart', component: ShoppingcartComponent},
         { path: 'Head', component: HeadComponent},
         { path: 'Historyorderlist', component: HistoryorderlistComponent}]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
