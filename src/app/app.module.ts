import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendService } from './service/backend.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { UpdateTicketsComponent } from './update-tickets/update-tickets.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddTicketsComponent, UpdateTicketsComponent, ListTicketsComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
