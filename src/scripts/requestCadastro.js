import { getLocalStorage } from "./localStorage.js"
import { btnEventCadastro } from "./btnEventsCadastro.js"
import  {toastCadastro } from "./toastCadastro.js"

const baseUrl = "http://localhost:3333/"

async function cadastro(body) {

    try{
        const request = await fetch(baseUrl + "users/" + "create", {
            method: "POST",
            headers:{

                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if(request.ok == true){

            const response = await request.json()

            btnEventCadastro()

            localStorage.setItem("userDados", JSON.stringify(response))
    
            toastCadastro("Sucesso!", "Redirecionando para página de Login.")
    
            setTimeout(() => {
    
                window.location.replace("../../index.html")
            }, 4000)

        } else {

            const btnCadastro = document.querySelector("#btn-cadastrar")

            btnCadastro.innerHTML = ""
            btnCadastro.innerText = "Cadastrar"
        }

    } catch (err) {
        console.log(err)
    }
}

export {
    cadastro
}