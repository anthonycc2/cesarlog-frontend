import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Model } from './model';
import { apiUrl } from './service-path';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  model: Model;

  private baseUrl = apiUrl + '/model';

  constructor(private http: HttpClient) {
    this.model = new Model();
  }

  //GET methods  
  getModel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getModelList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  //POST method
  addModel(model: Model): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, model);
  }

  //PUT method
  updateModel(model: Model): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, model);
  }

  //DELETE method
  deleteModel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

}
