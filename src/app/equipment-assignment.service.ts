import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipmentAssignment } from './equipment-assignment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentAssignmentService {

  private baseUrl = 'http://localhost:8080/equipment-assignment';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //GET methods  
  getEquipmentAssignment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getEquipmentAssignmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  //POST method
  addEquipmentAssignment(equipmentAssignment: EquipmentAssignment): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, EquipmentAssignment);
  }

  //PUT method
  updateEquipmentAssignment(equipmentAssignment: EquipmentAssignment): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, equipmentAssignment);
  }

  //DELETE method
  deleteEquipmentAssignment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}