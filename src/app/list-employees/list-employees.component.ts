import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from "../functions-package";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html"
})
export class ListEmployeesComponent implements OnInit {
  employees: Observable<Employee[]> | undefined;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);
  
    this.reloadData();
  }

  reloadData(): void {
    this.employees = this.employeeService.getEmployeeList();
  }

}