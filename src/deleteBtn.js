import { defaultArray } from "./defaultArray";
import { allTodosArray } from "./generalArray";
import { schoolArray } from "./schoolArray";
import { taskArray } from "./tasksArray";

export default function HandleDeleteBtn() {
    const deleteBtns = document.querySelectorAll("#deleteBtn");

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.removeEventListener("click", handleDelete)
        const identifiers = deleteBtn.parentElement.dataset.identifier.split("/")
        deleteBtn.setAttribute("data-index-general", `${Number(identifiers[1])}`);
        deleteBtn.setAttribute("data-list", `${identifiers[0]}`)
        deleteBtn.setAttribute("data-index-list", `${Number(identifiers[2])}`)
    });

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", handleDelete)
    })

}

function handleDelete() {
    const list = this.dataset.list
    let index
    let generalIndex

    if (list === "Default") {
        index = defaultArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        generalIndex = allTodosArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        defaultArray.splice(index, 1)
    } else if (list === "Tasks") {
        index = taskArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        generalIndex = allTodosArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        taskArray.splice(index, 1)
    } else if (list === "School") {
        index = schoolArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        generalIndex = allTodosArray.findIndex((element) => element.identifier === this.parentElement.dataset.identifier)
        schoolArray.splice(index, 1)
    }

    allTodosArray.splice(generalIndex, 1);
    this.parentElement.remove()
} 

