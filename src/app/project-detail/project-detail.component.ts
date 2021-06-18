import { Component, OnInit } from '@angular/core';
import {ITask} from "../task";
import {ActivatedRoute, Router} from "@angular/router";
import {IssueService} from "../issue.service";
import {IProject} from "../project-list/project";
import {ProjectService} from "../project-list/project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  pageTitle = 'Project'
  project: IProject | undefined
  error = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) {
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`

    this.projectService.getProject(id)
        .subscribe( project => this.project = project);
  }

  onSave(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.projectService.updateProject(id, this.project!).subscribe(
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
