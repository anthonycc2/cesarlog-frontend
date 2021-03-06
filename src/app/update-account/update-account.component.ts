import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AccountService } from '../account.service';
import { EmployeeService } from '../employee.service';
import { Account } from '../account';
import { Employee } from '../employee';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html'
})
export class UpdateAccountComponent implements OnInit {

  id: number;
  newPassword1: string;
  newPassword2: string;
  account: Account;
  employees: Observable<Employee[]> | undefined;

  constructor(
    private accountService: AccountService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);
    
    this.id = this.route.snapshot.params['id'];
    
    this.accountService.getAccount(this.id)
      .subscribe(data => {
        //console.log(data)
        this.account = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErrorMessage();
      });

    this.employees = this.employeeService.getEmployeeList();
  }

  update(): void {
    if (this.newPassword1 != '' && this.newPassword2 != '' && this.newPassword1 === this.newPassword2) {
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
    this.gotoList();
  }

  gotoList(): void {
    this.router.navigate(['list-accounts']);
  }
}