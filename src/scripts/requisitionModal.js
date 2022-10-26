import { createPost } from "./requestModal.js"

export const eventCreatPost = () => {

    const form = document.querySelector(".form-modal-inputs")
    const elements = [...form.elements]

    form.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {}

        elements.forEach((elem) => {

            if(elem.tagName == "INPUT" && elem.value !== ""){

                body[elem.id] = elem.value
            }
        })

        await createPost(body)
    })

}