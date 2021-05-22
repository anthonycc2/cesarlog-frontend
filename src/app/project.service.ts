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

  //PUT method
  updateProject(project: Project): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, project);
  }

  //DELETE method
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  /*
  //////////////////VERSÃO DE HEBER//////////////////
  private baseUrl = 'https://cesarlog-backend.herokuapp.com/project';

  constructor(private http: HttpClient) { }

  //GET methods  
  getProject(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProjectList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  //POST method
  addProject(project: Project): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, project);
  }

  //PUT method
  updateProject(project: Project): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, project);
  }

  //DELETE method
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/
}