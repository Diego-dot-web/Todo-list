import form from "./createForm";

export default function inputTodo() {
    const addBtn = document.querySelector(".addTodo");
    const startDialog = document.querySelector(".startDialog");

    addBtn.addEventListener("click", () => {
        form()
        startDialog.style.display = "none";
        const dateInput = document.querySelector("#datePicker");
        dateInput.addEventListener("click", () => {
            dateInput.showPicker()
        })

        const priorityBtn = document.querySelector("#priority");
        priorityBtn.addEventListener("click", () => {
            const priorityBox = document.querySelector("#optionBox");
            const style = getComputedStyle(priorityBox)
            const display = style.display;
            if(display === "none"){
                priorityBox.style.display = "flex"
            } else {
                priorityBox.style.display = "none"
            }
            
        })
    });

    window.onclick = (e) => {
        const dialog = document.querySelector("#form");
        const cancelBtn = document.querySelector("#cancelBtn");
        if (e.target == dialog || e.target === cancelBtn) {
            dialog.remove()
            startDialog.style.display = "flex";
        }
    }



}