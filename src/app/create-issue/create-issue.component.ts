import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ITask} from "../task";
import {IssueService} from "./../issue.service";

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  pageTitle = "Create Issue";
  task: ITask = {description: "", id: "", project: "TEST", status: "TODO", title: "", type: "STORY"};
  error = false;

  constructor(private router: Router, private issueService: IssueService) {

  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.issueService.postIssue(this.task).subscribe(
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
    console.log("error: ", error)
    this.error = true
  }
}
