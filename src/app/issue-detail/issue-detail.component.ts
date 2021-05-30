import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ITask } from "../task";
import {IssueService} from "./../issue.service";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  pageTitle = 'Issue'
  task: ITask | undefined
  error = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private issueService: IssueService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`

    this.issueService.getIssue(id)
        .subscribe( task => this.task = task);
  }

  onSave(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

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
    console.log("error: ", error)
    this.error = true
  }
}
