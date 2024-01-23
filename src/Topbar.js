import DOMPurify from "isomorphic-dompurify";

export default function createTopbar (){
    const mainContentDiv = document.querySelector(".topbar");
    const optionDiv = document.createElement("a");
    const messageDiv = document.createElement("a");

    optionDiv.setAttribute("href", "#")
    messageDiv.setAttribute("href", "#")
    messageDiv.classList.add("image");
    optionDiv.classList.add("image")
    mainContentDiv.appendChild(messageDiv)
    mainContentDiv.appendChild(optionDiv)
    messageDiv.innerHTML = DOMPurify.sanitize('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width=100% height=100% viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>')
    optionDiv.innerHTML = DOMPurify.sanitize('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width=100% height=100% viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>')
}