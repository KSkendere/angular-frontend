import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  sortEmployeeByNameURL = 'api/v1/employees/sort-by-name';

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<Employee>(url).pipe();
  }
  // : Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }



  private baseURL= '/api/v1/employees';
  constructor(private httpClient: HttpClient) { }
 

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  sortByname():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.sortEmployeeByNameURL);
}
}

