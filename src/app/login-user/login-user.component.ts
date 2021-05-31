import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnInit {

  user: Account;

  showErrorMessage: boolean;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.user = new Account();
    this.showErrorMessage = false;
  }

  tryLogin() {
    this.accountService.login(this.user);
    this.router.navigate(['/list-equipments']);
  }

}
