export default function completed(){
    const chekers = document.querySelectorAll("#checker")
    const btns = document.querySelectorAll("button")

    chekers.forEach(check => {
        check.addEventListener("click", ()=>{
            if(check.checked){
                check.parentElement.style.backgroundColor = "#525151"
            } else{
                console.log("not chack")
                check.parentElement.style.backgroundColor = "#1e1e1e"
            }
        })
        
    });
}