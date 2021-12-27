import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  selected: string ="--Choose option--";
  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees()
 
  }

   private getEmployees(){

    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
      console.log (data);
    })
  }

//   selectedEmployee?: Employee;
// onSelect(employee: Employee): void {
//   this.selectedEmployee = employee;
// }


  //   getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }

 sortByName():void{
  this.employeeService.sortByname().subscribe
  (data =>{
    this.employees = data;
    console.log (data);
  })}
  // (employees=>this.employees = this.employees);})
   
 selectedOption(){

    switch(this.selected) {
      case "1":
         // if modo 1 is selected do something.
         break;
      case "2":
         // if modo 2 is selected do something.
         break;
      case "5":
         this.sortByName();
         break;
    }
  }
 }


