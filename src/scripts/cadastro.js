import { cadastro } from "./requestCadastro.js";

const eventCadastro = () => {

    const local = document.querySelector(".div-1-section-1")
    const elements = [...local.elements]

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

const buttonBack = document.querySelector(".button-back")

buttonBack.addEventListener("click", (event) => {

    event.preventDefault()
    window.location.assign("../../index.html")
})

const buttonBackBottom = document.querySelector(".button-back-bottom")

buttonBackBottom.addEventListener("click", (event) => {

    event.preventDefault()
    window.location.assign("../../index.html")
})