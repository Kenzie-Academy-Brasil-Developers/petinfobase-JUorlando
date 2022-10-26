import { renderPosts } from "./renderPost.js"

export function criandoModalPost() {

    const navModal = document.querySelector(".app")

    let tagSectionModal = document.createElement("section")
    let tagBigBox = document.createElement("div")
    let tagDiv = document.createElement("div")
    let tagTitle = document.createElement("h2")
    let tagClose = document.createElement("button")
    let tagForm = document.createElement("form")
    let tagLabel = document.createElement("label")
    let tagInputTitle = document.createElement("input")
    let tagLabelContent = document.createElement("label")
    let tagContent = document.createElement("input")
    let tagForm2 = document.createElement("form")
    let tagButtonCancel = document.createElement("button")
    let tagButtonPublic = document.createElement("button")

    tagSectionModal.classList.add("modal-container")
    tagBigBox.classList.add("big-box")
    tagDiv.classList.add("div-modal")
    tagTitle.classList.add("title-modal")
    tagClose.classList.add("close-modal")
    tagForm.classList.add("form-modal-inputs")
    tagLabel.classList.add("label-title")
    tagInputTitle.classList.add("title")
    tagLabelContent.classList.add("content-label")
    tagContent.classList.add("content")
    tagForm2.classList.add("form-buttons-modal")
    tagButtonCancel.classList.add("button-modal-1")
    tagButtonPublic.classList.add("button-modal-2")

    tagTitle.innerText = "Criando novo post"
    tagClose.innerText = "X"
    tagLabel.innerText = "Titulo do post"
    tagInputTitle.placeholder = "Digite seu titulo aqui..."
    tagLabelContent.innerText = "Conteúdo do post"
    tagContent.placeholder = "Desenvolva aqui o conteúdo do seu post..."
    tagButtonCancel.innerText = "Cancelar"
    tagButtonPublic.innerText = "Publicar"

    tagInputTitle.type = "text"
    tagContent.type = "text"

    tagInputTitle.name = "text"
    tagContent.name = "content"

    tagButtonCancel.type = "button"
    tagButtonPublic.type = "button"

    tagForm2.append(tagButtonCancel, tagButtonPublic)
    tagForm.append(tagLabel, tagInputTitle, tagLabelContent, tagContent)
    tagDiv.append(tagTitle, tagClose)
    tagBigBox.append(tagDiv, tagForm, tagForm2)
    tagSectionModal.append(tagBigBox)
    navModal.append(tagSectionModal)

    const buttonToggleModal = document.querySelector(".btn-open-modal")

    buttonToggleModal.addEventListener("click", function () {

        document.querySelector(".modal-container").classList.add("show-modal")
    })

    tagClose.addEventListener("click", function () {

        document.querySelector(".modal-container").classList.remove("show-modal")
    })

    tagButtonCancel.addEventListener("click", function () {

        document.querySelector(".modal-container").classList.remove("show-modal")
    })

}

