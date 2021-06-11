import { Observable } from "rxjs";
import { EquipmentService } from "../equipment.service";
import { Equipment } from "../equipment";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from "../functions-package";

@Component({
  selector: "app-list-equipments",
  templateUrl: "./list-equipments.component.html"
})
export class ListEquipmentsComponent implements OnInit {
  userLevel: string;
  equipments: Observable<Equipment[]> | undefined;

  constructor(
    private equipmentService: EquipmentService,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);
    
    this.userLevel = window.localStorage.getItem('user_level');

    this.reloadData();
  }

  reloadData(): void {
    this.equipments = this.equipmentService.getEquipmentList();
  }

  delete(id: number): void {
    if (confirm("Confirma a exclusão?")) {
      this.equipmentService.deleteEquipment(id)
        .subscribe(
          data => {
            console.log(data);
            this.functionsPackage.showSucessMessage();
            this.reloadData();
          },
          error => {
            console.log(error);
            this.functionsPackage.showErrorMessage();
          });
    }
  }

  update(id: number): void {
    this.router.navigate(['update-equipment', id]);
  }

  insert(): void {
    this.router.navigate(['insert-equipment']);
  }

}