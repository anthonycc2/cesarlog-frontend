import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { apiUrl } from './service-config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = apiUrl + '/employee';

  constructor(private http: HttpClient) { }

  //GET methods  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getEmployeeListByProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/project/${id}`);
  }
  
  //POST method
  addEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  //PUT method
  updateEmployee(employee: Employee): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, employee);
  }

  //DELETE method
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}