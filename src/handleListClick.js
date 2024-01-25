export default function listClick() {
    const listOptions = document.querySelectorAll(".listOptionsDiv");
    const listBox = document.querySelector("#listName");

    listOptions.forEach(option => {
        option.addEventListener("click", ()=>{
            listBox.textContent = `${option.id}`
        })
    });
}