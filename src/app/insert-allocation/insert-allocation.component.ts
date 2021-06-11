import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AllocationService } from '../allocation.service';
import { EquipmentService } from '../equipment.service';
import { EmployeeService } from '../employee.service';
import { Allocation } from '../allocation';
import { Equipment } from '../equipment';
import { Employee } from '../employee';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-insert-allocation',
  templateUrl: './insert-allocation.component.html'
})
export class InsertAllocationComponent implements OnInit {

  allocation: Allocation;
  equipments: Observable<Equipment[]> | undefined;
  employees: Observable<Employee[]> | undefined;

  constructor(
    private allocationService: AllocationService,
    private equipmentService: EquipmentService,
    private employeeService: EmployeeService,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.allocation = new Allocation();

    this.equipments = this.equipmentService.getEquipmentList();
    
    var userLevel = window.localStorage.getItem('user_level');
    if (userLevel === 'GESTOR') {
      var id = parseInt(window.localStorage.getItem('user_project_id'), 10);
      this.employees = this.employeeService.getEmployeeListByProject(id);
    } else {
      this.employees = this.employeeService.getEmployeeList();
    }
  }

  save(): void {
    var dateTime = new Date();
    this.allocation.allocationDate = this.functionsPackage.formatDate(dateTime);
    this.allocation.status = "PENDENTE";

    this.allocationService.addAllocation(this.allocation)
      .subscribe(data => {
        console.log(data);
        this.functionsPackage.showSucessMessage();
        //this.allocation = new Allocation();
      },
        error => {
          console.log(error);
          this.functionsPackage.showErrorMessage();
        });
  }

  onSubmit(): void {
    this.save();
    this.gotoList();
  }

  gotoList(): void {
    this.router.navigate(['/list-allocations']);
  }
}