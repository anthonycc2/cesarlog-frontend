import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:8080/project';

  constructor(private http: HttpClient) { }

  //GET methods  
  getProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getProjectList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  //POST method
  addProject(project: Project): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, project);
  }
  /*addProject(project: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, project);
  }*/

  //PUT method
  updateProject(project: Project): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, project);
  }
  /*update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }*/

  //DELETE method
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}