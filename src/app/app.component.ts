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

  showMenu: boolean;
  showMenuString: string;  


  isAthenticatedUser: boolean;
  
  //user: Account;
  userLogin: string;
  userPassword: string;

  account: Account;
  showErrorMessage: boolean;
  hideFromManager: boolean;

  constructor(private accountService: AccountService,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit() {
    this.isAthenticatedUser = false;
    //this.user = new Account();
    this.userLogin = '';
    this.userPassword = '';

    this.account = new Account();
    this.showErrorMessage = false;
    this.hideFromManager = true;

    //window.location.reload();

    /*if (!this.isAthenticatedUser)
      window.location.href = 'login.html';*/
  }

  /*///////OPCAO COM EVENT-EMITTER
  this.showMenu = false;
  this.showMenuString = this.showMenu.toString();
    
    this.userService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    );*/

    /////OPCAO COM LOCAL-STORAGE
    /*this.user = new User();
    //this.user = this.userService.userLoggedIn;
    if (window.localStorage.getItem('user_logged') != '')
      this.user.login = window.localStorage.getItem('user_logged');
    else
      this.user = { login: 'marcos', password: 'pontes', level: 'N'};*/

  tryLogin() {
    //this.isAthenticatedUser = this.accountService.login(this.user);
    
    this.accountService.getAccountByLogin(this.userLogin)
    .subscribe(data => {
      console.log(data)
      this.account = data;
    }, error => {
      console.log(error);
      this.functionsPackage.showErroMessage();
    });

    if (this.account.password === this.userPassword) {
    /*if (this.isAthenticatedUser) {
      this.accountService.getAccountByLogin(this.user.login)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErroMessage();
      });*/
      //this.account = this.user;
      this.isAthenticatedUser = true;
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
  }

  logout() {
    this.isAthenticatedUser = false;
    this.account = new Account();
    window.localStorage.clear();
    this.router.navigate(['home']);
    //window.location.reload();
  }

  onSubmit() {
    this.tryLogin();
    //this.submittedForm = true;
    //this.gotoList();
  }

  /*gotoList() {
    this.router.navigate(['/list-equipments']);
  }*/

}