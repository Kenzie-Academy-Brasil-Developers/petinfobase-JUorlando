import { toast, toastCadastro } from "./toast.js"
import { getLocalStorage } from "./localStorage.js"
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
            }, 2000)

        } else {

            const errText = document.querySelector(".senha-incorreta")

            errText.classList.add("senha-error")
        }

    } catch (err) {
        console.log(err)
    }
}

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

            localStorage.setItem("userDados", JSON.stringify(response))
    
            toastCadastro("Sua conta foi criada com sucesso!", "Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:")
    
            setTimeout(() => {
    
                window.location.replace("../../index.html")
            }, 2000)

        } 

    } catch (err) {
        console.log(err)
    }
}


export {
    login,
    cadastro
}

