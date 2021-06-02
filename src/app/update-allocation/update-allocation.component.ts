import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { Allocation } from '../allocation';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-update-allocation',
  templateUrl: './update-allocation.component.html'
})
export class UpdateAllocationComponent implements OnInit {

  id: number;
  allocation: Allocation;

  constructor(
    private allocationService: AllocationService,
    private route: ActivatedRoute,
    private router: Router,
    private functionsPackage: FunctionsPackage) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.allocationService.getAllocation(this.id)
      .subscribe(data => {
        console.log(data)
        this.allocation = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErroMessage();
      });
  }

  update() {
    var dDateTime = new Date();
    this.allocation.locationDate = this.functionsPackage.formatDate(dDateTime);
    
    this.allocationService.updateAllocation(this.allocation)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
        this.functionsPackage.showErroMessage();
      });
  }

  onSubmit() {
    this.update();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['list-allocations']);
  }
}