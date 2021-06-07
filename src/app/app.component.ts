import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { Account } from './account';
import { AccountService } from './account.service';
import { FunctionsPackage } from './functions-package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'CesarLog';

  
  userLogin: string;
  userPassword: string;
  userLoggedIn: boolean;
  //hideFromManager: boolean;


  //user: Account;
  account: Account;

  constructor(private accountService: AccountService,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {

    this.userLogin = '';
    this.userPassword = '';
    this.userLoggedIn = false;
    
    //this.user = new Account();
    this.account = new Account();
  }

  tryLogin(): void {
    this.accountService.getAccountByLogin(this.userLogin)
    .subscribe(data => {
      console.log(data)
      this.account = data;
    }, error => {
      console.log(error);
      this.functionsPackage.showErrorMessage();
    });

    if (this.account.password === this.userPassword) {
      this.userLoggedIn = true;
      window.localStorage.setItem('user_login', this.account.login);
      window.localStorage.setItem('user_level', this.account.level);
      window.localStorage.setItem('user_employee_id', this.account.employee.id.toString());

      //--------------------------------------------------DESABILITAR ISSO AQUI NO FINAL DE TUDO
      alert("O usuário logado é: " + this.account.login);
    } else {
      this.account = new Account();
      alert("Login ou senha inválidos!");
    }
  }

  //Opção simples para testes
  tryLogin1(): void {

    if (this.userLogin === 'silviom' && this.userPassword === 'meira') {
      this.account.id = 1;
      this.account.login = this.userLogin;
      this.account.password = this.userPassword;
      this.account.level = "GESTOR";
      this.account.employee.id = 6;

      this.userLoggedIn = true;
      window.localStorage.setItem('user_login', this.account.login);
      window.localStorage.setItem('user_level', this.account.level);
      window.localStorage.setItem('user_employee_id', this.account.employee.id.toString());
      alert("O usuário logado é: " + this.account.login);
    } else {
      this.account = new Account();
      alert("Login ou senha inválidos!");
    }
  
  }

  // Opção em desuso
  /*tryLogin2() {
    this.userLoggedIn = this.accountService.login(this.user);
    
    if (this.userLoggedIn) {
      this.accountService.getAccountByLogin(this.user.login)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErroMessage();
      });
      window.localStorage.setItem('user_login', this.account.login);
      window.localStorage.setItem('user_level', this.account.level);
      window.localStorage.setItem('user_employee_id', this.account.employee.id.toString());
      //this.showErrorMessage = false;

      if (this.account.level === "GESTOR") {
        this.hideFromManager = false;
      }

      alert("O usuário logado é: " + this.account.login);
      //window.location.reload();
    } else {
      this.account = new Account();
      //this.showErrorMessage = true;
      alert("Login ou senha inválidos!");
    }
  }*/


  logout(): void {
    this.userLoggedIn = false;
    this.account = new Account();
    window.localStorage.clear();
    this.router.navigate(['home']);
  }

  onSubmit(): void {
    this.tryLogin();
  }

}