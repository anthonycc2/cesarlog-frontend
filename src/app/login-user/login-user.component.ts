import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnInit {

  user: User;

  showErrorMessage: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.showErrorMessage = false;
  }

  tryLogin() {
    this.userService.login(this.user);
    this.router.navigate(['/list-equipments']);
  }

}
