import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProjectResponse} from "../project-response";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  getProjects(pageNo: number): Observable<IProjectResponse> {
    return this.http.get<IProjectResponse>(this.baseUrl + '/project?pageNo=' + pageNo + '&pageSize=10&sortBy=id');
  }
}
