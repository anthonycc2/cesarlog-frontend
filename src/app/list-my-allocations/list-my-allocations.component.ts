import { Observable } from "rxjs";
import { AllocationService } from "../allocation.service";
import { Allocation } from "../allocation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: "app-my-list-allocations",
  templateUrl: "./list-my-allocations.component.html"
})
export class ListMyAllocationsComponent implements OnInit {

  allocations: Observable<Allocation[]> | undefined;

  constructor(
    private allocationService: AllocationService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.reloadData();
  }

  reloadData(): void {
      var id = parseInt(window.localStorage.getItem("user_employee_id"), 10);
      this.allocations = this.allocationService.getAllocationListByEmployee(id);
  }
  
  confirm(allocation: Allocation): void {
    if (confirm("Confirma o vínculo com o equipamento?")) {
      var dateTime = new Date();
      allocation.acceptationDate = this.functionsPackage.formatDate(dateTime);
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
      allocation.returnDate = this.functionsPackage.formatDate(dateTime);
      allocation.status = "DEVOLVIDO";
      
      this.allocationService.updateAllocation(allocation)
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

  detail(id: number): void {
    this.router.navigate(['detail-allocation', id]);
  }

  update(id: number): void {
    this.router.navigate(['update-allocation', id]);
  }
}