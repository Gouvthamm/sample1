import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import {identifierModuleUrl} from '@angular/compiler'
import { AuthGuard } from './auth.guard';
import { LoginpgComponent } from './loginpg/loginpg.component';

import { ProductpgComponent } from './productpg/productpg.component';

const routes: Routes = [
{path:'loginpg',component:LoginpgComponent}  ,
{
    path:'productpg', component:ProductpgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }MessageChannel 
