import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { Allocation } from '../allocation';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-detail-allocation',
  templateUrl: './detail-allocation.component.html'
})
export class DetailAllocationComponent implements OnInit {

  id: number;
  allocation: Allocation;

  constructor(
    private allocationService: AllocationService,
    private route: ActivatedRoute,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.allocationService.getAllocation(this.id)
      .subscribe(data => {
        console.log(data)
        this.allocation = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErrorMessage();
      });
  }

  gotoList(): void {
    this.router.navigate(['list-my-allocations']);
  }
}