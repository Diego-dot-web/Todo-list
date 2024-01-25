export default function taskBtn() {
    const buttonsDiv = document.querySelector("#buttonsDiv");
    const addTaskBtn = document.createElement("button");

    addTaskBtn.textContent = "Add task";
    addTaskBtn.setAttribute("id", "taskBtn");
    addTaskBtn.setAttribute("type", "submit")

    buttonsDiv.appendChild(addTaskBtn);
}