import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { IssuesListComponent } from './issues-list/issues-list.component';
import {RouterModule} from "@angular/router";
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { HomeComponent } from './home/home.component';
import {convertStatusPipe} from "./issue-status.pipe.ts";
import { CreateIssueComponent } from './create-issue/create-issue.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        IssuesListComponent,
        IssueDetailComponent,
        HomeComponent,
        convertStatusPipe,
        CreateIssueComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            [
                {path: 'create', component: CreateIssueComponent},
                {path: 'issues', component: IssuesListComponent},
                {path: 'issues/:id', component: IssueDetailComponent},
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
