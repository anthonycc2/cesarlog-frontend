import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EquipmentService } from '../equipment.service';
import { CategoryService } from '../category.service';
import { ModelService } from '../model.service';
import { ProjectService } from '../project.service';
import { Equipment } from '../equipment';
import { Category } from '../category';
import { Model } from '../model';
import { Project } from '../project';
import { FunctionsPackage } from '../functions-package';

@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html'
})
export class InsertEquipmentComponent implements OnInit {

  equipment: Equipment;
  categories: Observable<Category[]> | undefined;
  models: Observable<Model[]> | undefined;
  projects: Observable<Project[]> | undefined;

  constructor(
    private equipmentService: EquipmentService,
    private categoryService: CategoryService,
    private modelService: ModelService,
    private projectService: ProjectService,
    private router: Router,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.equipment = new Equipment();

    this.projects = this.projectService.getProjectList();
    this.categories = this.categoryService.getCategoryList();
    this.models = this.modelService.getModelList();
  }

  save(): void {
    this.equipmentService
      .addEquipment(this.equipment).subscribe(data => {
        console.log(data);
        this.functionsPackage.showSucessMessage();
      },
        error => {
          this.functionsPackage.showErrorMessage();
          console.log(error);
        });
  }

  onSubmit(): void {
    this.save();
    this.gotoList();
  }

  gotoList(): void {
    this.router.navigate(['list-equipments']);
  }
}