import DOMPurify from "isomorphic-dompurify";
import option from "./createOption";
import newDueDate from "./createDueDate";

export default function selectPriority(){
    const secondSectionDiv = document.createElement("div")
    const form = document.querySelector("form");
    const priorityDiv = document.createElement("a");
    const prioritySpan = document.createElement("span");

    secondSectionDiv.setAttribute("id", "secondSection");
    prioritySpan.textContent = "Priority";
    priorityDiv.setAttribute("id", "priority");
    
    form.appendChild(secondSectionDiv);
    secondSectionDiv.appendChild(priorityDiv);
    priorityDiv.innerHTML = DOMPurify.sanitize('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" /><path d="M5 21v-7" /></svg>');
    priorityDiv.appendChild(prioritySpan);

    newDueDate();
    option("Priority 1");
    option("Priority 2");
    option("Priority 3");
    option("Priority 4");
}