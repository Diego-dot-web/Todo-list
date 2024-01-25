import { defaultArray } from "./defaultArray";
import renderAll from "./renderTodos";
import { schoolArray } from "./schoolArray";
import { taskArray } from "./tasksArray";

export default function renderList() {
    const defaultList = document.querySelector("#DefaultSection");
    const taskList = document.querySelector("#TasksSection");
    const schoolList = document.querySelector("#SchoolSection");

    defaultList.addEventListener("click", () => {
        const todos = document.querySelectorAll("#todoCard");
        todos.forEach(todo => {
            todo.remove()
        });
        renderAll(defaultArray)
    })

    taskList.addEventListener("click", () => {
        const todos = document.querySelectorAll("#todoCard");
        todos.forEach(todo => {
            todo.remove()
        });
        renderAll(taskArray)
    })

    schoolList.addEventListener("click", () => {
        const todos = document.querySelectorAll("#todoCard");
        todos.forEach(todo => {
            todo.remove()
        });
        renderAll(schoolArray)
    })
}