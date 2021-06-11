import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Category } from './category';
import { apiUrl } from './service-config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: Category;

  private baseUrl = apiUrl + '/category';

  constructor(private http: HttpClient) {
    this.category = new Category();
  }

  //GET methods  
  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  //POST method
  addCategory(category: Category): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, category);
  }

  //PUT method
  updateCategory(category: Category): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, category);
  }

  //DELETE method
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

}
