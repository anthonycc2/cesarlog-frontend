import { Component, OnInit } from '@angular/core';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  sDateTime: string;

  login: string;

  constructor(private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.login = window.localStorage.getItem('user_login');
  }

}
