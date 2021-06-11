import {IPage} from "./page";
import {IProject} from "./project-list/project";

export interface IProjectResponse {
    pages: IPage;
    projects: IProject[];
}