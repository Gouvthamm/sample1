import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepartmentModule } from './department/department.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupcompComponent } from './signupcomp/signupcomp.component';
import{FormsModule} from '@angular/forms';
import { LoginpgComponent } from './loginpg/loginpg.component';

import { ProductpgComponent } from './productpg/productpg.component'
import{ HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    SignupcompComponent,
    LoginpgComponent,
    HttpClient,
    ProductpgComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartmentModule,
    ProductModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
