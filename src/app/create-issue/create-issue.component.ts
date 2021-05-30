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

  constructor(private router: Router, private issueService: IssueService) {

  }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.task)
    this.issueService.postIssue(this.task).subscribe(
        result => console.log("success: ", result),
        error => console.log("error: ", error)
    );
  }

  onBack(): void {
    this.router.navigate(['issues']);
  }
}
