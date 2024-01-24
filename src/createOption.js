export default function option(option){
    const optionElement = document.createElement("option");
    const select = document.querySelector("#priority");
    optionElement.textContent = `${option}`
    optionElement.setAttribute("id", `${option}`)
    select.appendChild(optionElement)
}