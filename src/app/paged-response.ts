import {IPage} from "./page";
import {ITask} from "./task";

export interface IPagedResponse {
    pages: IPage;
    tasks: ITask[];
}