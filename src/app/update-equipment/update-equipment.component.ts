import { Component, OnInit } from '@angular/core';
import { Equipment } from '../equipment';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html'//,
  //styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  submittedForm: boolean = false;
  showErrorMessage: boolean;
  id: number;
  equipment: Equipment;

  constructor(private route: ActivatedRoute, private router: Router,
    private equipmentService: EquipmentService) { }

  ngOnInit() {
    //this.equipment = new Equipment();
    this.submittedForm = false;
    this.showErrorMessage = false;

    this.id = this.route.snapshot.params['id'];
    
    this.equipmentService.getEquipment(this.id)
      .subscribe(data => {
        console.log(data)
        this.equipment = data;
      }, error => {
        console.log(error);
        this.showErrorMessage = true; 
      });
  }

  updateEquipment() {
    this.equipmentService.updateEquipment(this.equipment)
      .subscribe(data => {
        console.log(data);
        //this.equipment = new Equipment();
      }, error => {
        console.log(error);
        this.showErrorMessage = true;
      });
  }

  onSubmit() {
    this.updateEquipment();
    this.submittedForm = true;
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/list-equipments']);
  }
}
