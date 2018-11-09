import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NeckComponent } from './neck/neck.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryorderlistComponent } from './historyorderlist/historyorderlist.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NeckComponent,
    OrderComponent,
    FooterComponent,
    LoginComponent,
    HistoryorderlistComponent,
    ShoppingcartComponent,
    AfterloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
