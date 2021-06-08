import { Observable } from "rxjs";
import { AllocationService } from "../allocation.service";
import { Allocation } from "../allocation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: "app-list-allocations",
  templateUrl: "./list-allocations.component.html"
})
export class ListAllocationsComponent implements OnInit {

  allocations: Observable<Allocation[]> | undefined;

  constructor(
    private allocationService: AllocationService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit() {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.reloadData();
  }

  reloadData() {
    if (window.localStorage.getItem('user_level') === "COLABORADOR") {
      //var id = 1;
      var id = parseInt(window.localStorage.getItem('user_employee_id'), 10);
      this.allocations = this.allocationService.getAllocationListByEmployee(id);
    } else {
      this.allocations = this.allocationService.getAllocationList();
    }
  }

  delete(id: number) {
    if (confirm("Confirma a exclusão?")) {
      this.allocationService.deleteAllocation(id)
        .subscribe(
          data => { //(data: any) => {
            console.log(data);
            this.reloadData();
          }, error => console.log(error)); //(error: any) => console.log(error));
    }
  }

  update(id: number) {
    this.router.navigate(['update-allocation', id]);
  }

  confirm(allocation: Allocation) {
    if (confirm("Confirma o vínculo com o equipamento?")) {
      var dateTime = new Date();
      allocation.allocationDate = this.functionsPackage.formatDate(dateTime);
      allocation.status = "ACEITO";

      this.allocationService.updateAllocation(allocation)
        .subscribe(
          data => { //(data: any) => {
            console.log(data);
            this.reloadData();
          }, error => { //(error: any) => console.log(error));
            console.log(error);
            this.functionsPackage.showErrorMessage();
          });
    }
  }

  return(allocation: Allocation) {
    if (confirm("Confirma a devolução do equipamento?")) {
      var dateTime = new Date();
      allocation.allocationDate = this.functionsPackage.formatDate(dateTime);
      allocation.status = "DEVOLVIDO";
      
      this.allocationService.updateAllocation(allocation)
        .subscribe(
          data => { //(data: any) => {
            console.log(data);
            this.reloadData();
          }, error => { //(error: any) => console.log(error));
            console.log(error);
            this.functionsPackage.showErrorMessage();
          });
    }
  }
}