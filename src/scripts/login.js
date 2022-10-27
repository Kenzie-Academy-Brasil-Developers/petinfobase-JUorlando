import { login } from "./request.js";

const eventLogin = () => {

    const form = document.querySelector(".box-section-2")
    const elements = [...form.elements]

    form.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {}

        elements.forEach((elem) => {

            if(elem.tagName == "INPUT" && elem.value !== ""){

                body[elem.id] = elem.value
            }
        })

        await login(body)
    })

}

eventLogin()

const botaoDeCadastrar = document.querySelector(".button-cadastrar")

botaoDeCadastrar.addEventListener("click", (event) => {

    event.preventDefault()
    window.location.assign("../../pages/login/cadastro.html")
})