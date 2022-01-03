import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http'
import { EmployeeService } from './employee.service';
import { EmployeeScreenComponent } from './employee-screen/employee-screen.component';
import { FormsModule } from '@angular/forms';

 
@NgModule({
  declarations: [
        AppComponent,
    EmployeeListComponent,
    EmployeeScreenComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
