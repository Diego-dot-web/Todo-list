import DOMPurify from "isomorphic-dompurify";

export default function createList (){
    const items = [
        {
            name: 'My Lists',
        },
        {
            name: 'Default',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width=100% height=100% viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" /></svg>'
        },
        {
           name: 'Tasks',
           icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width=100% height=100% viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" /></svg>' 
        },
        {
            name:'School',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width=100% height=100% viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" /></svg>'
        }
    ];

    const listDiv = document.querySelector(".list");

    items.forEach(item => {
        const contentDiv = document.createElement("a");
        const textDiv = document.createElement("span");
        const icon = item.icon

        contentDiv.classList.add("listSection");
        contentDiv.setAttribute("href", "#")
        textDiv.textContent = item.name

        listDiv.appendChild(contentDiv);
        contentDiv.innerHTML = DOMPurify.sanitize(icon)
        contentDiv.appendChild(textDiv);

    });

}