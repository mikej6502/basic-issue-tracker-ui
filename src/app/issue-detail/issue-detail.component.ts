import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ITask } from "../task";
import {IssueService} from "./../issue.service";
import {ProjectService} from "../project-list/project.service";
import {IProjectResponse} from "../project-response";
import {IProject} from "../project-list/project";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  pageTitle = 'Issue'
  task: ITask | undefined
  error = false;
  projects: IProject[] = []

  constructor(private route: ActivatedRoute,
              private router: Router,
              private issueService: IssueService,
              private projectService: ProjectService ) {
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`

    this.issueService.getIssue(id)
        .subscribe( task => this.task = task);

    this.projectService.getProjects(0, 250).subscribe( (response: IProjectResponse ) => {
          this.projects = response.projects
        }
    )
  }

  onSave(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.issueService.putIssue(id, this.task!).subscribe(
        () => this.submitSuccessful(),
        error => this.submitFailed(error)
    );
  }

  onBack(): void {
    this.router.navigate(['issues']);
  }

  submitSuccessful() {
    this.error = false;
    this.router.navigate(['issues'])
  }

  submitFailed(error: any) {
    this.error = true
  }
}
