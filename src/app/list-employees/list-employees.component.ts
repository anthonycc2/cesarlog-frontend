import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html"
})
export class ListEmployeesComponent implements OnInit {
  employees: Observable<Employee[]> | undefined;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    if (window.localStorage.length === 0) {
    //if (window.localStorage.length === 0 || window.localStorage.getItem('user_login') === '') {
      alert("Usuário não logado!!!");
      this.router.navigate(['/']);
    }
  
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

}