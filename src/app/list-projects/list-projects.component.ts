import { Observable } from "rxjs";
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-list-projects",
  templateUrl: "./list-projects.component.html"
})
export class ListProjectsComponent implements OnInit {
  projects: Observable<Project[]> | undefined;

  constructor(private projectService: ProjectService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.projects = this.projectService.getProjectList();
  }

}