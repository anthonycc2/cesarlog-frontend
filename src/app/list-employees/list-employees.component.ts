//import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
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
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  /*delete(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }*/

  /*update(id: number) {
    this.router.navigate(['/update-employee/' + id]);
  }*/
}