import {IPage} from "./page";
import {ITask} from "./task";

export interface ITaskResponse {
    pages: IPage;
    tasks: ITask[];
}