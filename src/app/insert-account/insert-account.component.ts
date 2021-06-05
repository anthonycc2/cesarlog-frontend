import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AccountService } from '../account.service';
import { EmployeeService } from '../employee.service';
import { Account } from '../account';
import { Employee } from '../employee';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-insert-account',
  templateUrl: './insert-account.component.html'
})
export class InsertAccountComponent implements OnInit {
  password2: string;
  account: Account;
  employees: Observable<Employee[]> | undefined;

  constructor(private accountService: AccountService,
    private employeeService: EmployeeService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {

  }

  ngOnInit() {
    this.functionsPackage.verifyAuthenticatedUser();

    this.password2 = "";
    this.account = new Account();

    this.employees = this.employeeService.getEmployeeList();
  }

  save() {
    if (this.account.password === this.password2) {

      this.accountService.addAccount(this.account)
        .subscribe(data => {
          console.log(data);
          //this.account = new Account();
        },
          error => {
            console.log(error);
            this.functionsPackage.showErroMessage();
          });
    } else {
      alert("As senhas digitadas não coincidem!");
    }
  }

  onSubmit() {
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['list-accounts']);
  }
}