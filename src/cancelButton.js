export default function cancelBtn (){
    const sectionDiv = document.querySelector("#secondSection");
    const buttonsDiv = document.createElement("div");
    const cancelBtn = document.createElement("button");

    cancelBtn.textContent = "Cancel"
    cancelBtn.setAttribute("id", "cancelBtn");
    cancelBtn.setAttribute("type", "button");

    buttonsDiv.setAttribute("id", "buttonsDiv");


    sectionDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(cancelBtn)
}