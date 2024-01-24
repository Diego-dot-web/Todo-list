export default function newDueDate(){
    const sectionDiv = document.querySelector("#secondSection");
    const dateInput = document.createElement ("input");
    const dateSpan = document.createElement("span");

    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "datePicker");
    dateSpan.textContent = "Due date";

    sectionDiv.appendChild(dateInput);
}