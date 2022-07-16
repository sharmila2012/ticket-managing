import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { UpdateTicketsComponent } from './update-tickets/update-tickets.component';

const routes : Routes = [
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:AddTicketsComponent,
    path:'add'
  },
  {
    component:UpdateTicketsComponent,
    path:'update/:id'
  },
  {
    component:ListTicketsComponent,
    path:''
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
