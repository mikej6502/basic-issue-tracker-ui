import { Injectable } from "@angular/core";
import { ITask } from "../task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private todoSvcUrl = "http://localhost:8080/task/";

  constructor(private http: HttpClient) {

  }

  getIssue(id: Number): Observable<ITask> {
    return this.http.get<ITask>(this.todoSvcUrl + id);
  }
}
