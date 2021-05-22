import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EquipmentAssignmentService } from '../equipment-assignment.service';
import { EquipmentService } from '../equipment.service';
import { EmployeeService } from '../employee.service';
import { EquipmentAssignment } from '../equipment-assignment';
import { Equipment } from '../equipment';
import { Employee } from '../employee';

@Component({
  selector: 'app-insert-equipment-assignment',
  templateUrl: './insert-equipment-assignment.component.html'
})
export class InsertEquipmentAssignmentComponent implements OnInit {

  equipmentAssignment: EquipmentAssignment;
  equipments: Observable<Equipment[]> | undefined
  employees: Observable<Employee[]> | undefined
  hideSucessMessage: boolean;
  hideErrorMessage: boolean;

  data: Date;

  constructor(private equipmentAssignmentService: EquipmentAssignmentService,
    private equipmentService: EquipmentService,
    private employeeService: EmployeeService,
    private router: Router) {

  }

  ngOnInit() {
    this.equipmentAssignment = new EquipmentAssignment();
    this.hideSucessMessage = true;
    this.hideErrorMessage = true;
    this.data = new Date();

    this.equipments = this.equipmentService.getEquipmentList();
    this.employees = this.employeeService.getEmployeeList();
  }

  save() {
    this.equipmentAssignmentService
      .addEquipmentAssignment(this.equipmentAssignment).subscribe(data => {
        console.log(data);
        //this.equipmentAssignment = new EquipmentAssignment();
      },
        error => {
          console.log(error);
          this.hideErrorMessage = false;
        });
  }

  onSubmit() {
    this.save();
    this.hideSucessMessage = false;
    //this.gotoList();
  }

  gotoList() {
    this.router.navigate(['list-equipment-assignments']);
  }

}
