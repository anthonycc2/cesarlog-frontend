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

  ngOnInit() {
    this.functionsPackage.verifyAuthenticatedUser();

    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccountList();
  }

  delete(id: number) {
    if (confirm("Confirma a exclusão?")) {
      this.accountService.deleteAccount(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        }, error => console.log(error));
      }
  
  }

  update(id: number) {
    this.router.navigate(['update-account', id]);
  }

}
