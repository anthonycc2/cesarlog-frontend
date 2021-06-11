import { Observable } from "rxjs";
import { AccountService } from "../account.service";
import { Account } from "../account";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: "app-list-accounts",
  templateUrl: "./list-accounts.component.html"
})
export class ListAccountsComponent implements OnInit {

  accounts: Observable<Account[]> | undefined;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.reloadData();
  }

  reloadData(): void {
    this.accounts = this.accountService.getAccountList();
  }

  delete(id: number): void {
    if (confirm("Confirma a exclusão?")) {
      this.accountService.deleteAccount(id)
      .subscribe(data => {
          console.log(data);
          this.functionsPackage.showSucessMessage();
          this.reloadData();
        }, error => {
          console.log(error);
          this.functionsPackage.showErrorMessage();
        });
      }
  }

  update(id: number): void {
    this.router.navigate(['update-account', id]);
  }

  insert(): void {
    this.router.navigate(['insert-account']);
  }
}
