import { Injectable } from "@angular/core";
import { ITask } from "./task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IssueService {
    private serviceUrl = "http://localhost:8080/task";

    constructor(private http: HttpClient) {

    }

    getIssue(id: Number): Observable<ITask> {
        return this.http.get<ITask>(this.serviceUrl + '/' + id);
    }

    getIssues(): Observable<ITask[]> {
        return this.http.get<ITask[]>(this.serviceUrl + '?pageNo=0&pageSize=15&sortBy=id');
    }

    postIssue(task: ITask): Observable<any> {
        return this.http.post(this.serviceUrl, task)
    }
}
