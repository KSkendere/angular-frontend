import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeScreenComponent } from './employee-screen/employee-screen.component';

const routes: Routes = [

  {path:'employees',component: EmployeeListComponent},
  { path: 'employees/:id', component: EmployeeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
