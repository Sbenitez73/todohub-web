import { Category } from "./enums/category";
import { Status } from "./enums/status";

export class Todo {
    id: number;
    status: Status;
    category: Category;
    title: string;
    description: string;

    constructor() {
        this.id = 0;
    }
}