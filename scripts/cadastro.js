import { cadastro } from "./requestCadastro.js";

const eventCadastro = () => {

    const local = document.querySelector(".div-1-section-1")
    const elements = [...local.elements]

    console.log(local)

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {}

        elements.forEach((elem) => {

            if(elem.tagName == "INPUT" && elem.value !== ""){

                body[elem.id] = elem.value
            }
        })

        await cadastro(body)
    })
}

eventCadastro()