import { format } from "date-fns";
import HandleDeleteBtn from "./deleteBtn";
import renderList from "./renderLists";
import completed from "./markAsCompleted";

export default function renderAll(array) {
    const mainContent = document.querySelector(".mainContent");

    const checker = document.createElement("input");
    const container = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const tittle = document.createElement("div");
    let dateFormated
    let lastItem = array[array.length - 1]

    if (lastItem.dueDate === "") {
        dateFormated = "No date set"
    } else {
        dateFormated = format(`${lastItem.dueDate.replace(/-/g, '/')}`, 'do/MMM/yyyy');
    }


    checker.setAttribute("type", "checkbox");
    checker.setAttribute("id", "checker")
    container.setAttribute("data-index", `${array.indexOf(lastItem)}`)
    container.setAttribute("data-identifier", `${lastItem.identifier}`)
    container.setAttribute("id", "todoCard");
    deleteBtn.setAttribute("id","deleteBtn");
    deleteBtn.textContent = "Delete"
    description.setAttribute("id", "todoDescription");
    description.textContent = `${lastItem.description}`;
    description.setAttribute("data-identifier", `${lastItem.identifier}`)
    dueDate.setAttribute("id", "dueDateTodo")
    dueDate.textContent = `${dateFormated}`
    dueDate.setAttribute("data-identifier", `${lastItem.identifier}`)
    tittle.setAttribute("id", "todoTittle");
    tittle.textContent = `${lastItem.title}`;
    tittle.setAttribute("data-identifier", `${lastItem.identifier}`)



    mainContent.appendChild(container);
    container.appendChild(checker);
    container.appendChild(tittle);
    container.appendChild(description);
    container.appendChild(dueDate)
    container.appendChild(deleteBtn)
    HandleDeleteBtn()
    completed()
}