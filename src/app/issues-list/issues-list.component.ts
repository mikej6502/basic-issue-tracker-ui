import { Component, OnInit } from '@angular/core';
import {ITask} from "../task";
import {IssuesListService} from "./issues-list-service";

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  pageTitle = "Issues";
  tasks: ITask[] = [];

  constructor(private issuesService: IssuesListService) { }

  ngOnInit(): void {
    this.issuesService.getIssues().subscribe({
      next: tasks => this.tasks = tasks
    });
  }
}
