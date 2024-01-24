import selectPriority from "./createSelectPriority";

export default function form(){
    const mainContent = document.querySelector(".content");
    const formDiv = document.createElement("div")
    const form = document.createElement("form");
    const titleInput = document.createElement("input");
    const titleInputLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const descriptionInputLabel = document.createElement("label");
    
    titleInputLabel.setAttribute("for", "title");
    titleInput.setAttribute("placeholder", "Task Name");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("type", "text");

    formDiv.setAttribute("id", "form")

    descriptionInputLabel.setAttribute("for", "description");
    descriptionInput.setAttribute("placeholder", "Description");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("type", "text");

    mainContent.appendChild(formDiv);
    formDiv.appendChild(form)
    form.appendChild(titleInputLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionInputLabel);
    form.appendChild(descriptionInput);
    
    selectPriority();
}