import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { IssuesListComponent } from './issues-list/issues-list.component';
import {RouterModule} from "@angular/router";
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { HomeComponent } from './home/home.component';
import { ConvertStatusPipe } from "./issue-status.pipe";
import { CreateIssueComponent } from './create-issue/create-issue.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
    declarations: [
        AppComponent,
        IssuesListComponent,
        IssueDetailComponent,
        HomeComponent,
        ConvertStatusPipe,
        CreateIssueComponent,
        FooterComponent,
        ProjectListComponent,
        ProjectDetailComponent,
        CreateProjectComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            [
                {path: 'new-issue', component: CreateIssueComponent},
                {path: 'new-project', component: CreateProjectComponent},
                {path: 'issues', component: IssuesListComponent},
                {path: 'issues/:id', component: IssueDetailComponent},
                {path: 'projects', component: ProjectListComponent},
                {path: 'projects/:id', component: ProjectDetailComponent},
                {path: 'home', component: HomeComponent},
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                {path: '**', redirectTo: 'home', pathMatch: 'full'}
            ]),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
