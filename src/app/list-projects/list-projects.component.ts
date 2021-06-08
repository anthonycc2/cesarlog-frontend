import { Observable } from "rxjs";
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FunctionsPackage } from "../functions-package";

@Component({
  selector: "app-list-projects",
  templateUrl: "./list-projects.component.html"
})
export class ListProjectsComponent implements OnInit {
  projects: Observable<Project[]> | undefined;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private functionsPackage: FunctionsPackage) {}

  ngOnInit(): void {
    this.functionsPackage.verifyAuthenticatedUser(this.router);
    
    this.reloadData();
  }

  reloadData(): void {
    this.projects = this.projectService.getProjectList();
  }

}