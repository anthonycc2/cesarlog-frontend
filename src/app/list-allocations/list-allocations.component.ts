import { Observable } from "rxjs";
import { AllocationService } from "../allocation.service";
import { Allocation } from "../allocation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from '../functions-package';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";

@Component({
  selector: "app-list-allocations",
  templateUrl: "./list-allocations.component.html"
})
export class ListAllocationsComponent implements OnInit {

  employee: Employee;
  allocations: Observable<Allocation[]> | undefined;

  constructor(
    private allocationService: AllocationService,
    private employeeService: EmployeeService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.reloadData();
  }

  reloadData(): void {
    if (window.localStorage.getItem('user_level') === "GESTOR") {
      var id = parseInt(window.localStorage.getItem('user_project_id'), 10);
      this.allocations = this.allocationService.getAllocationListByProject(id);
    } else {
      this.allocations = this.allocationService.getAllocationList();
    }
  }

  delete(id: number): void {
    if (confirm("Confirma a exclusão?")) {
      this.allocationService.deleteAllocation(id)
        .subscribe(
          data => {
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
    this.router.navigate(['update-allocation', id]);
  }

  /*confirm(allocation: Allocation): void {
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

  return(allocation: Allocation): void {
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
  }*/
}