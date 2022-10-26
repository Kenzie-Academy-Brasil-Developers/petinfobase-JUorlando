import { renderPosts } from "./renderPost.js";
import { createPost } from "./requestModal.js"

export async function btnEventModal (){


    const btnModal = document.querySelector(".button-modal-2")
    const inputTitle = document.querySelector(".title")
    const inputText = document.querySelector(".content")
    
    btnModal.addEventListener("click", async (event) => {

        event.preventDefault()

        const post = 
        {
            title: `${inputTitle.value}`,
            content: `${inputText.value}`
        };

        await createPost(post)
        await renderPosts()
    
        btnModal.innerHTML = ""
    
        const img = document.createElement("img")
        img.src = "../../src/img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"
    
        btnModal.appendChild(img)

    })

}