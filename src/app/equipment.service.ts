import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseUrl = 'http://localhost:8080/equipment';

  constructor(private http: HttpClient) { }

  //GET methods  
  getEquipment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getEquipmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  //POST method
  /*addEquipment(equipment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, equipment);
  }*/

  addEquipment(equipment: Equipment): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, equipment);
  }

  //PUT method
  /*updateEquipment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }*/

  updateEquipment(equipment: Equipment): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${equipment.id}`, equipment);
  }

  //DELETE method
  deleteEquipment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}