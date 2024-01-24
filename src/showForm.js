import form from "./createForm";

export default function inputTodo(){
    const addBtn = document.querySelector(".addTodo");
    const startDialog = document.querySelector(".startDialog");

    addBtn.addEventListener("click", ()=> {
        form()
        startDialog.style.display = "none";
    });

    
    window.onclick = (e)=>{
        const dialog = document.querySelector("#form");
        if (e.target == dialog){
            dialog.remove()
            startDialog.style.display = "flex";
        }
    }
        
}