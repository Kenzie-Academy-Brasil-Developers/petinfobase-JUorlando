import { toast } from "./toast.js"
import { btnEventAcess } from "./btnEvents.js"

const baseUrl = "http://localhost:3333/"

async function login(body){

    try{
        const request = await fetch(baseUrl + "login", {
            method: "POST",
            headers:{

                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if(request.ok == true){

            const response = await request.json()
    
            toast("Sucesso!", "Você está sendo redirecionado para página principal.")

            btnEventAcess()

            localStorage.setItem("userLogin", JSON.stringify(response))

            setTimeout(() => {
    
                window.location.assign("../../pages/posts/posts.html")
            }, 4000)

        } else {

            const errText = document.querySelector(".senha-incorreta")

            errText.classList.add("senha-error")

            const btnAcess = document.querySelector(".button-acessar")

            btnAcess.innerHTML = ""
            btnAcess.innerText = "Acessar"
        }

    } catch (err) {
        console.log(err)
    }
}

export {
    login
}

