import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AllocationService } from '../allocation.service';
import { EquipmentService } from '../equipment.service';
import { EmployeeService } from '../employee.service';
import { Allocation } from '../allocation';
import { Equipment } from '../equipment';
import { Employee } from '../employee';
import { Functions } from '../functions';

@Component({
  selector: 'app-insert-allocation',
  templateUrl: './insert-allocation.component.html'
})
export class InsertAllocationComponent implements OnInit {

  allocation: Allocation;
  equipments: Observable<Equipment[]> | undefined;
  employees: Observable<Employee[]> | undefined;
  showErrorMessage: boolean;

  constructor(private allocationService: AllocationService,
    private equipmentService: EquipmentService,
    private employeeService: EmployeeService,
    private router: Router,
    private functions: Functions) {

  }

  ngOnInit() {
    this.functions.verifyAuthenticatedUser();

    this.allocation = new Allocation();
    //this.allocation.allocationDate = new Date().toString();
    this.showErrorMessage = false;

    this.equipments = this.equipmentService.getEquipmentList();
    this.employees = this.employeeService.getEmployeeList();
  }

  save() {
    var dateTime = new Date();
    this.allocation.allocationDate = this.functions.formatDate(dateTime);
    this.allocation.status = "PENDENTE";

    this.allocationService.addAllocation(this.allocation)
      .subscribe(data => {
        console.log(data);
        this.showErrorMessage = false;
        //this.allocation = new Allocation();
      },
        error => {
          console.log(error);
          this.showErrorMessage = true;
        });
  }

  onSubmit() {
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/list-allocations']);
  }
}