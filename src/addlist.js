export default function list(list){
    const listOptionsDiv = document.querySelector("#listOptionsDiv");
    const listElement = document.createElement("a");

    
    listElement.textContent = `${list}`;
    listElement.setAttribute("id", `${list}`);
    listElement.classList.add("listOptionsDiv");

    listOptionsDiv.appendChild(listElement)
}