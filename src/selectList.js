import list from "./addlist";
import listClick from "./handleListClick";

export default function selectList(){
    const form = document.querySelector("#form");
    const secondSection = document.querySelector("#secondSection");
    const listDiv = document.createElement("div");
    const listSpan = document.createElement("span");
    const listOptionsDiv = document.createElement("div");

    listOptionsDiv.setAttribute("id", "listOptionsDiv");
    listSpan.textContent = "Default";
    listSpan.setAttribute("id", "listName")  
    listDiv.setAttribute("id", "listDiv");

    secondSection.appendChild(listDiv);
    listDiv.appendChild(listSpan);
    form.appendChild(listOptionsDiv)

    list("Default");
    list("Tasks");
    list("School");
    listClick();
}