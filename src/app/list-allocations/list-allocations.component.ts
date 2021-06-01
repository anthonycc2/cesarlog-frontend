import { Observable } from "rxjs";
import { AllocationService } from "../allocation.service";
import { Allocation } from "../allocation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Functions } from '../functions';

@Component({
  selector: "app-list-allocations",
  templateUrl: "./list-allocations.component.html"
})
export class ListAllocationsComponent implements OnInit {

  allocations: Observable<Allocation[]> | undefined;

  constructor(
    private allocationService: AllocationService,
    private router: Router,
    private functions: Functions) {}

  ngOnInit() {
    this.functions.verifyAuthenticatedUser();

    this.reloadData();
  }

  reloadData() {
    this.allocations = this.allocationService.getAllocationList();
  }

  delete(id: number) {
    this.allocationService.deleteAllocation(id)
      .subscribe(
        data => { //(data: any) => {
          console.log(data);
          this.reloadData();
        }, error => console.log(error)); //(error: any) => console.log(error));
  }

  update(id: number) {
    this.router.navigate(['update-allocation', id]);
  }

  confirm(allocation: Allocation) {
    var dateTime = new Date();
    allocation.allocationDate = this.functions.formatDate(dateTime);
    allocation.status = "CONFIRMADO";

    this.allocationService.updateAllocation(allocation)
      .subscribe(
        data => { //(data: any) => {
          console.log(data);
          this.reloadData();
        }, error => { //(error: any) => console.log(error));
          console.log(error);
          alert("Ocorreu um erro! Visualize o console para mais detalhes.")
        });
  }

  return(allocation: Allocation) {
    var dateTime = new Date();
    allocation.allocationDate = this.functions.formatDate(dateTime);
    allocation.status = "DEVOLVIDO";
    
    this.allocationService.updateAllocation(allocation)
      .subscribe(
        data => { //(data: any) => {
          console.log(data);
          this.reloadData();
        }, error => { //(error: any) => console.log(error));
          console.log(error);
          alert("Ocorreu um erro! Visualize o console para mais detalhes.")
        });
  }
}