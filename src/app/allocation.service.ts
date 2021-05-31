import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Allocation } from './allocation';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  allocation: Allocation;

  private baseUrl = 'http://localhost:8080/allocation';

  constructor(private http: HttpClient) {
    this.allocation = new Allocation();
  }

  //GET methods  
  getAllocation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getAllocationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  //POST method
  addAllocation(allocation: Allocation): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, allocation);
  }

  //PUT method
  updateAllocation(allocation: Allocation): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, allocation);
  }

  //DELETE method
  deleteAllocation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

}
