import { Component, OnInit } from '@angular/core';
import {ITask} from "../task";
import {IssueService} from "./../issue.service";
import {Router} from "@angular/router";
import {ITaskResponse} from "../task-response";


@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  pageTitle = "Issues";
  tasks: ITask[] = []
  totalPages = 0
  currentPage = 0

  constructor(private issuesService: IssueService, private router: Router) { }

  ngOnInit(): void {
    this.issuesService.getIssues(0).subscribe( (response: ITaskResponse ) => {
      this.tasks = response.tasks
      this.totalPages = response.pages.totalPages
      this.currentPage = response.pages.currentPage
    }
   )
  }

  counter() {
    return new Array(this.totalPages);
  }

  onNewIssue(): void {
    this.router.navigate(['create']);
  }


  onGetPage(index: number): void {
    this.issuesService.getIssues(index).subscribe( (response: ITaskResponse ) => {
          this.tasks = response.tasks
          this.totalPages = response.pages.totalPages
          this.currentPage = response.pages.currentPage
        }
    )
  }

  getStatusClass(status: string): string {
    if( status == "DONE" )
    {
      return "bg-success";
    }
    else if( status == "IN_PROGRESS" )
    {
      return "bg-secondary";
    }

    return "bg-primary";
  }

  active(index: number): string {
    if (index == this.currentPage) {
      return "active"
    }

    return ""
  }
}
