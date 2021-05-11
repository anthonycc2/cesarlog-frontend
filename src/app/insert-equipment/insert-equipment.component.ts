import { EquipmentService } from '../equipment.service';
import { Equipment } from '../equipment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html'//,
  //styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent implements OnInit {

  equipment: Equipment;
  submittedForm: boolean;
  showErrorMessage: boolean;

  constructor(private equipmentService: EquipmentService,
    private router: Router) {

    }

  ngOnInit() {
    this.equipment = new Equipment();
    this.submittedForm = false;
	  this.showErrorMessage = false;
  }

  /*newEquipment(): void {
    this.submitted = false;
    this.equipment = new Equipment();
  }*/

  save() {
    this.equipmentService
    .addEquipment(this.equipment).subscribe(data => {
      console.log(data);
      this.equipment = new Equipment();
    }, 
      error => { console.log(error); this.showErrorMessage = true; });
  }

  onSubmit() {
    this.save();    
    this.submittedForm = true;
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/list-equipments']);
  }
}