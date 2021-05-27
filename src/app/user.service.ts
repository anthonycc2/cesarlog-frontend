import { Injectable, Output, EventEmitter } from '@angular/core';
//import { Observable } from "rxjs";
import { User } from './user';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn: boolean = false;

  userLoggedIn: User;

  @Output() showMenuEmitter: EventEmitter<boolean>;  

  //constructor() { this.showMenuEmitter = new EventEmitter(); }
  //constructor() { this.userLoggedIn = new User(); }
  constructor() { }

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

  login(userForLogin: User): boolean {
    if (userForLogin.login === 'silvio' && userForLogin.password === 'meira') {
      return true;
    } else {
      return false;
    }
  }

  /////////// NO FINAL DEVE FICAR ASSIM:
  /*loginFinal(userForLogin: User): boolean {
    return this.http.get(`${this.baseUrl}/login`, userForLogin);
  }*/

  
  /*login2(userForLogin: User): Observable<any> {
    if (userForLogin.login === 'silvio' && userForLogin.password === 'meira') {
      window.localStorage.setItem('user_login', userForLogin.login);
    }
  }*/

}
