import { Component, OnInit } from '@angular/core';
import {IProject} from "../project-list/project";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../project-list/project.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  pageTitle = 'Create Project'
  project: IProject = {id: "", title: "", description: "", key: ""}
  error = false;

  constructor(private router: Router,
              private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.projectService.createProject(this.project).subscribe(
        () => this.submitSuccessful(),
        error => this.submitFailed(error)
    );
  }

  onBack(): void {
    this.router.navigate(['projects']);
  }

  submitSuccessful() {
    this.error = false;
    this.router.navigate(['projects'])
  }

  submitFailed(error: any) {
    this.error = true
  }
}
