import { Component, OnInit } from '@angular/core';
import { Functions } from '../functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  sDateTime: string;

  constructor(private functions: Functions) { }

  ngOnInit(): void {
    var dateTime = new Date();
    this.sDateTime = this.functions.formatDate(dateTime);
  }

}
