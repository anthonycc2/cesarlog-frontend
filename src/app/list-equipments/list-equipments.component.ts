//import { EquipmentDetailsComponent } from '../equipment-details/equipment-details.component';
import { Observable } from "rxjs";
import { EquipmentService } from "../equipment.service";
import { Equipment } from "../equipment";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-list-equipments",
  templateUrl: "./list-equipments.component.html"//,
  //styleUrls: ["./list-equipments.component.css"]
})
export class ListEquipmentsComponent implements OnInit {
  equipments: Observable<Equipment[]> | undefined;

  constructor(private equipmentService: EquipmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.equipments = this.equipmentService.getEquipmentList();
  }

  delete(id: number) {
    this.equipmentService.deleteEquipment(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }

  update(id: number) {
    this.router.navigate(['/update-equipment/' + id]);
  }
}