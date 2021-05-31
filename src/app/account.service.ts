import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /*private isUserLoggedIn: boolean = false;*/

  private account: Account;

  private baseUrl = 'http://localhost:8080/account';

  constructor(private http: HttpClient) {
    this.account = new Account();
  }

  /*login(user: User) {
    if (user.login === 'silvio' && user.password === 'meira') {
      //window.localStorage.setItem('user_loggedin', user.login);
      //this.userLoggedIn = user;
      //this.isUserLoggedIn = true;
      this.showMenuEmitter.emit(true);
    } else {
      //this.isUserLoggedIn = false;
      this.showMenuEmitter.emit(false);
    }
  }*/

  login(userForLogin: Account): boolean {
    if (userForLogin.login === 'silviom' && userForLogin.password === 'meira') {
      return true;
    } else {
      return false;
    }
  }

  /////////// NO FINAL DEVE FICAR ASSIM:
  login1(user: Account): boolean {
    this.getAccountByLogin(user.login)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => {
        console.log(error);
        return false;
        //this.showErrorMessage = true; 
      });
    if (user.login === this.account.login && user.password === this.account.password) {
      return true;
    } else {
      return false;
    }
  }

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
