import {Component, OnInit} from '@angular/core';
import {IProject} from "./project";
import {ProjectService} from "./project.service";
import {IProjectResponse} from "../project-response";
import {Router} from "@angular/router";

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    pageTitle = "Projects";
    projects: IProject[] = []
    totalPages = 0
    currentPage = 0
    loading = true
    timeout = false
    timeoutTimer: any

    constructor(private projectService: ProjectService, private router: Router) {

    }

    ngOnInit(): void {
        this.onGetPage(0)
    }

    counter() {
        return new Array(this.totalPages);
    }

    active(index: number): string {
        if (index == this.currentPage) {
            return "active"
        }

        return ""
    }

    onGetPage(index: number): void {
        this.timeoutTimer = setTimeout(() => {
            if( this.loading ) {
                this.timeout = true
                this.loading = false
            }
        }, 15_000);

        this.loading = true

        this.projectService.getProjects(index).subscribe( (response: IProjectResponse ) => {
                this.projects = response.projects
                this.totalPages = response.pages.totalPages
                this.currentPage = response.pages.currentPage

                this.loading = false
                clearTimeout(this.timeoutTimer)
            }
        )
    }

    onNewProject(): void {
        this.router.navigate(['new-project']);
    }
}
