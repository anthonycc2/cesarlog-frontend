import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'CesarLog';

  showMenu: boolean;
  showMenuString: string;  


  isAthenticatedUser: boolean;
  user: Account;
  account: Account;
  showErrorMessage: boolean;

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    this.isAthenticatedUser = false;
    this.user = new Account();
    this.user.level = "C"; //////////TIRAR
    this.account = new Account();
    this.showErrorMessage = false;

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
    this.isAthenticatedUser = this.accountService.login(this.user);

    if (this.isAthenticatedUser) {
      this.account = this.user;//=this.userService.getAccountByLogin(user.login);
      window.localStorage.setItem('user_login', this.account.login);
      window.localStorage.setItem('user_level', this.account.level);
      this.showErrorMessage = false;
      alert("O usuário logado é: " + window.localStorage.getItem('user_login'));
      //window.location.reload();
    } else {
      this.showErrorMessage = true;
    }
  }

  logout() {
    this.isAthenticatedUser = false;
    this.account = new Account();
    window.localStorage.clear();
    this.router.navigate(['/']);
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