import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

  oldPassword: string;
  newPassword1: string;
  newPassword2: string;
  account: Account;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);
    
    var login = window.localStorage.getItem('user_login');
    this.accountService.getAccountByLogin(login)
      .subscribe(data => {
        //console.log(data)
        this.account = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErrorMessage();
      });
  }

  update(): void {
    if (this.account.password != this.oldPassword) {
      alert("Senha inválida!");
    } else if (this.newPassword1 === this.newPassword2) {
      this.account.password = this.newPassword1;

      this.accountService.updateAccount(this.account)
        .subscribe(data => {
          console.log(data);
          this.functionsPackage.showSucessMessage();
        }, error => {
          console.log(error);
          this.functionsPackage.showErrorMessage();
        });
    } else {
      alert("As senhas digitadas não coincidem!");
    }    
  }

  onSubmit(): void {
    this.update();
    this.getOut();
  }

  getOut(): void {
    this.router.navigate(['']);
  }
}