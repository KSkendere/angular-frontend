import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-screen',
  templateUrl: './employee-screen.component.html',
  styleUrls: ['./employee-screen.component.css']
})
export class EmployeeScreenComponent implements OnInit {

 
 employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }
// getEmployee(){
//   const id = Number(this.route.snapshot.paramMap.get('id'));
//   this.employeeService.getEmployee(id).subscribe(data=>{this.employee = data
//     console.log(data);
//   })
// }


  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }



  //   getEmployee(){
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.employeeService.getEmployee(id)
  //     .subscribe(employee => this.employee = employee);
  // }

goBack(): void {
  this.location.back();
}

}

