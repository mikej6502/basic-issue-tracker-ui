import {Component, OnInit} from '@angular/core';
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
    loading = true
    timeout = false
    timeoutTimer: any

    constructor(private issuesService: IssueService, private router: Router) {
    }

    ngOnInit(): void {
        this.onGetPage(0)
    }

    counter() {
        return new Array(this.totalPages);
    }

    onNewIssue(): void {
        this.router.navigate(['new-issue']);
    }


    onGetPage(index: number): void {
        this.timeoutTimer = setTimeout(() => {
            if (this.loading) {
                this.timeout = true
                this.loading = false
            }
        }, 15_000);

        this.loading = true
        this.issuesService.getIssues(index).subscribe((response: ITaskResponse) => {
                this.tasks = response.tasks
                this.totalPages = response.pages.totalPages
                this.currentPage = response.pages.currentPage

                this.loading = false
                clearTimeout(this.timeoutTimer)
            }
        )
    }

    getStatusClass(status: string): string {
        if (status == "DONE") {
            return "bg-success";
        } else if (status == "IN_PROGRESS") {
            return "bg-secondary";
        } else if (status == "DELETED") {
            return "bg-danger";
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
