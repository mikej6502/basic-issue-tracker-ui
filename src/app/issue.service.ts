import {Injectable} from "@angular/core";
import {ITask} from "./task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../environments/environment'
import {ITaskResponse} from "./task-response";

@Injectable({
    providedIn: 'root'
})
export class IssueService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {

    }

    getIssue(id: String): Observable<ITask> {
        return this.http.get<ITask>(this.baseUrl + '/task/' + id);
    }

    getIssues(pageNo: number): Observable<ITaskResponse> {
        return this.http.get<ITaskResponse>(this.baseUrl + '/task?pageNo=' + pageNo + '&pageSize=10&sortBy=id');
    }

    postIssue(task: ITask): Observable<any> {
        return this.http.post(this.baseUrl + '/task', task)
    }

    putIssue(id: String, task: ITask): Observable<any> {
        return this.http.put(this.baseUrl + '/task/' + id, task)
    }
}
