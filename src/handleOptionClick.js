export default function handleChange(){
    const priorities = document.querySelectorAll(".priorityOptions");
    const priorityDiv = document.querySelector("#priorityName")
    priorities.forEach(priority => {
        priority.addEventListener("click", ()=> {
            priorityDiv.textContent = `${priority.textContent}`
        })
    });
}