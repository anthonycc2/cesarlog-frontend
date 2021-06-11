import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from './equipment';
import { apiUrl } from './service-config';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseUrl = apiUrl + '/equipment';

  constructor(private http: HttpClient) { }

  //GET methods  
  getEquipment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getEquipmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  //POST method
  addEquipment(equipment: Equipment): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, equipment);
  }

  //PUT method
  updateEquipment(equipment: Equipment): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, equipment);
  }

  //DELETE method
  deleteEquipment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}