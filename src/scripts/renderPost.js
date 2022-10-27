import { deletePostForm, editPost, acessPostForm } from "./FormEditDelete.js";
import { openModal } from "./modalEditDelete.js";
import { acessPost } from "./requestEditDelete.js";

export function renderHeader (elt) {

    const img = document.querySelector(".img-perfil")

    img.src = elt.avatar
    img.alt = elt.avatar

}

export async function renderPosts (elt) {

    
    elt.forEach(element => {

        const tagUL = document.querySelector(".ul-posts")

        let tagLi = document.createElement("li")
        let tagDiv1 = document.createElement("div")
        let tagImg = document.createElement("img")
        let tagName = document.createElement("p")
        let tagData = document.createElement("p")
        let tagForm = document.createElement("form")
        let tagBtnEdit = document.createElement("button")
        let tagBtnDelete = document.createElement("button")
        let tagDiv2 = document.createElement("div")
        let tagTitle = document.createElement("h2")
        let tagContent = document.createElement("p")
        let tagAcess = document.createElement("a")

        tagLi.classList.add("li-posts")
        tagDiv1.classList.add("div-posts")
        tagImg.classList.add("img-user")
        tagName.classList.add("post-name")
        tagData.classList.add("data-publi")
        tagForm.classList.add("form-btn")
        tagBtnEdit.classList.add("btn-edit")
        tagBtnDelete.classList.add("btn-delete")
        tagDiv2.classList.add("div-posts-2")
        tagTitle.classList.add("post-title")
        tagContent.classList.add("posts-content")
        tagAcess.classList.add("post-acess")

        tagImg.src = element.user.avatar
        tagImg.alt = element.user.avatar

        tagName.innerText = element.user.username
        tagData.innerText = `| ${element.createdAt}`
        tagBtnEdit.innerText = "Editar"
        tagBtnDelete.innerText = "Excluir"
        tagTitle.innerText = element.title
        tagContent.innerText = element.content
        tagAcess.innerText = "Acessar Publicação"
        tagAcess.href = ""

        tagTitle.name = "title"
        tagContent.name = "content"

        tagBtnEdit.addEventListener("click", (event) => {

            event.preventDefault()

            const formEdit = editPost(element)
            openModal(formEdit)
        })

        tagBtnDelete.addEventListener("click", (event) => {

            event.preventDefault()

            const formDelete = deletePostForm(element.id)
            openModal(formDelete)
        })

        tagAcess.addEventListener("click", (event) => {

            event.preventDefault()

            const formAcess = acessPostForm(element)
            openModal(formAcess)
        })
        
        tagDiv2.append(tagTitle, tagContent, tagAcess)
        tagForm.append(tagBtnEdit, tagBtnDelete)
        tagDiv1.append(tagImg, tagName, tagData, tagForm)
        tagLi.append(tagDiv1, tagDiv2)
        tagUL.appendChild(tagLi)

    });

}

export function renderButtons (save, data) {

    data.forEach((element) => {
        
        let btnE = document.querySelector(".btn-edit")
        let btnD = document.querySelector(".btn-delete")
        
        if(save.id !== element.user.id){
            
            btnE.classList.add("display-none")
            btnD.classList.add("display-none")
            
        } else {

            btnE.classList.remove("display-none")
            btnD.classList.remove("display-none")
        }
        
    })

}