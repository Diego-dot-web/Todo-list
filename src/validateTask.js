import Todo from "./FactoryFunction";
import {defaultArray} from "./defaultArray";
import { allTodosArray } from "./generalArray";
import renderAll from "./renderTodos";
import { schoolArray } from "./schoolArray";
import { taskArray } from "./tasksArray";

export default function validateTask(){
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (e)=> {
        const formModal = document.querySelector("#form");
        e.preventDefault();

        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#datePicker").value;
        const priority = document.querySelector("#priorityName").textContent;
        const list = document.querySelector("#listName").textContent;

        if (title != ""){
            const todoItem = new Todo(title, description, dueDate, priority, list);
            if (list === "Default"){
                defaultArray.push(todoItem);
                allTodosArray.push(todoItem);
                formModal.remove();
            } else if ( list === "Tasks"){
                taskArray.push(todoItem);
                allTodosArray.push(todoItem);
                formModal.remove();
            } else if (list === "School"){
                schoolArray.push(todoItem);
                allTodosArray.push(todoItem);
                formModal.remove();
            }
            console.log(todoItem)

        } else {
            alert("At least give a Title to the task")
        }

        renderAll(allTodosArray)
    })

    
}