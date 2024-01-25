import { defaultArray } from "./defaultArray";
import { allTodosArray } from "./generalArray";
import { schoolArray } from "./schoolArray";
import { taskArray } from "./tasksArray";

export default class Todo {
    constructor(title, description, dueDate, priority, list){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
        this.arrray;
        if (list === "Default"){
            this.arrray = defaultArray;
        } else if (list === "School"){
            this.arrray = schoolArray
        }else if (list === "Tasks"){
            this.arrray = taskArray
        }
        this.identifier = `${this.list}/${Number(allTodosArray.indexOf(allTodosArray[allTodosArray.length - 1])) + 1}/${Number(this.arrray.indexOf(this.arrray[this.arrray.length - 1])) + 1}`;
    }
} 