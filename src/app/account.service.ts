import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/account';

  constructor(private http: HttpClient) { }

  //GET methods  
  getAccount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getAccountList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getAccountByLogin(login: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/login/${login}`);
  }

  //POST method
  addAccount(account: Account): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, account);
  }

  //PUT method
  updateAccount(account: Account): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, account);
  }

  //DELETE method
  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

}
