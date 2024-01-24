export default function option(option){
    const form = document.querySelector("#form");
    const optionBox = document.querySelector("#optionBox");
    const optionElement = document.createElement("a");
    optionElement.textContent = `${option}`;
    optionElement.setAttribute("id", `${option}`);
    optionElement.classList.add("priorityOptions");
    form.appendChild(optionBox);
    optionBox.appendChild(optionElement);
}