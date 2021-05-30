import { Injectable } from "@angular/core";
import { ITask } from "../task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssuesListService {
  private todoSvcUrl = "http://localhost:8080/task?pageNo=0&pageSize=15&sortBy=id";

  constructor(private http: HttpClient) {

  }

  getIssues(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.todoSvcUrl);
  }
}
