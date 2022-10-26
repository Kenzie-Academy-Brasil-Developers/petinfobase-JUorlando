import { btnEventModal } from "./btnEventModal.js"
import { getLocalStorage } from "./localStorage.js"
import { toastModal } from "./toastModal.js"

const baseUrl = "http://localhost:3333/"

async function createPost(body){

    const localStorage = getLocalStorage()

    try{
        const request = await fetch(baseUrl + "posts/" + "create", {
            method: "POST",
            headers:{

                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })

        if(request.ok == true){

            const response = await request.json()
    
            toastModal("Sucesso!", "Post criado com sucesso!")

            btnEventModal()

            setTimeout(() => {
    
                document.querySelector(".modal-container").classList.remove("show-modal")
            }, 4000)

        } 

    } catch (err) {
        console.log(err)
    }
}

export {
    createPost
}
