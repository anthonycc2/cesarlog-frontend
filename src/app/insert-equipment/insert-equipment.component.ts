import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EquipmentService } from '../equipment.service';
import { ProjectService } from '../project.service';
import { Equipment } from '../equipment';
import { Category } from '../category';
import { Model } from '../model';
import { Project } from '../project';

@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html'//,
  //styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent implements OnInit {

  equipment: Equipment;
  /*category: Category;
  model: Model;*/
  /*project: Project;*/
  projects: Observable<Project[]> | undefined
  submittedForm: boolean;
  showErrorMessage: boolean;

  constructor(private equipmentService: EquipmentService,
    private projectService: ProjectService,
    private router: Router) {

  }

  ngOnInit() {
    /*this.category = new Category();
    this.model = new Model();
    this.project = new Project();*/
    this.equipment = new Equipment();
    //this.equipment.employee.id = 0;
    this.submittedForm = false;
    this.showErrorMessage = false;

    this.projects = this.projectService.getProjectList();
  }

  /*newEquipment(): void {
    this.submitted = false;
    this.equipment = new Equipment();
  }*/

  save() {
    this.equipmentService
      .addEquipment(this.equipment).subscribe(data => {
        console.log(data);
        //this.equipment = new Equipment();
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