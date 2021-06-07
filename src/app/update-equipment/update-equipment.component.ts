import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html'
})
export class UpdateEquipmentComponent implements OnInit {

  id: number;
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
    private route: ActivatedRoute,
    private functionsPackage: FunctionsPackage) { }

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);

    this.id = this.route.snapshot.params['id'];

    this.equipmentService.getEquipment(this.id)
      .subscribe(data => {
        console.log(data)
        this.equipment = data;
      }, error => {
        console.log(error);
        this.functionsPackage.showErrorMessage();
      });

    this.projects = this.projectService.getProjectList();
    this.categories = this.categoryService.getCategoryList();
    this.models = this.modelService.getModelList();
  }

  update(): void {
    this.equipmentService.updateEquipment(this.equipment)
      .subscribe(data => {
        console.log(data);
        this.functionsPackage.showSucessMessage();
      }, error => {
        console.log(error);
        this.functionsPackage.showErrorMessage();
      });
  }

  onSubmit(): void {
    this.update();
    this.gotoList();
  }

  gotoList(): void {
    this.router.navigate(['list-equipments']);
  }
}
