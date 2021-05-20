import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html'
})
export class InsertEmployeeComponent implements OnInit {

  employee: Employee;
  submittedForm: boolean;
  showErrorMessage: boolean;

  constructor(private employeeService: EmployeeService,
    private router: Router) {

  }

  ngOnInit() {
    this.employee = new Employee();
    this.submittedForm = false;
    this.showErrorMessage = false;
  }

  /*newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }*/

  save() {
    this.employeeService
      .addEmployee(this.employee).subscribe(data => {
        console.log(data);
        //this.employee = new Employee();
      },
        error => { console.log(error); this.showErrorMessage = true; });
  }

  onSubmit() {
    this.save();
    this.submittedForm = true;
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/list-employees']);
  }
}