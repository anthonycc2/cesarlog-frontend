import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EquipmentAssignment } from "../equipment-assignment";
import { EquipmentAssignmentService } from "../equipment-assignment.service";

@Component({
  selector: "app-list-equipment-assignments",
  templateUrl: "./list-equipment-assignments.component.html"
})
export class ListEquipmentAssignmentsComponent implements OnInit {

  equipmentAssignments: Observable<EquipmentAssignment[]> | undefined;
  hideErrorMessage: boolean;

  constructor(private equipmentAssignmentService: EquipmentAssignmentService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    this.hideErrorMessage = true;
  }

  reloadData() {
    this.equipmentAssignments = this.equipmentAssignmentService.getEquipmentAssignmentList();
  }

  delete(id: number) {
    this.equipmentAssignmentService.deleteEquipmentAssignment(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => {
          console.log(error);
          this.hideErrorMessage = false;
        });
  }

  /*update(id: number) {
    this.router.navigate(['update-equipment', id]);
  }*/

}
