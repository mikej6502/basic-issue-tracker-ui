import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProjectResponse} from "../project-response";
import {ITask} from "../task";
import {IProject} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  getProjects(pageNo: number, pageSize: number): Observable<IProjectResponse> {
    return this.http.get<IProjectResponse>(this.baseUrl + '/project?pageNo=' + pageNo + '&pageSize=' + pageSize + '&sortBy=id');
  }

  getProject(id: String): Observable<IProject> {
    return this.http.get<IProject>(this.baseUrl + '/project/' + id);
  }

  createProject(project: IProject): Observable<any> {
    return this.http.post(this.baseUrl + '/project', project)
  }

  updateProject(id: String, project: IProject): Observable<any> {
    return this.http.put(this.baseUrl + '/project/' + id, project)
  }
}
