import { login } from "./request.js"

export function btnEventAcess (){


    const btnAcess = document.querySelector(".button-acessar")

    console.log(btnAcess)
    
    btnAcess.addEventListener("click", () => {
    
        btnAcess.innerHTML = ""
    
        const img = document.createElement("img")
        img.src = "../../img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"
    
        btnAcess.appendChild(img)
    
        btnSkin(btnAcess)

    })

}

console.log(btnEventAcess())


async function btnSkin (button){

    const users = await fetch("http://localhost:3333/", {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        button.innerHTML = ""
        button.innerText = "Acessar"
        
    })
 
    return users
 }