import { Component, OnInit } from '@angular/core';
import {ITask} from "../task";
import {IssueService} from "./../issue.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  pageTitle = "Issues";
  tasks: ITask[] = [];

  constructor(private issuesService: IssueService, private router: Router) { }

  ngOnInit(): void {
    this.issuesService.getIssues().subscribe({
      next: tasks => this.tasks = tasks
    });
  }

  onNewIssue(): void {
    this.router.navigate(['create']);
  }
}
