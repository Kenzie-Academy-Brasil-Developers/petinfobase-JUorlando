export function criandoModalDelete() {

    const navModal = document.querySelector(".app")

    let tagSectionModal = document.createElement("section")
    let tagBigBox = document.createElement("div")
    let tagDiv = document.createElement("div")
    let tagTitle = document.createElement("h2")
    let tagClose = document.createElement("button")
    let tagDivText = document.createElement("div")
    let tagTitle2 = document.createElement("h3")
    let tagText = document.createElement("p")
    let tagForm = document.createElement("form")
    let tagBtnCancel = document.createElement("button")
    let tagBtnDelete = document.createElement("button")

    tagSectionModal.classList.add("modal-container-delete")
    tagBigBox.classList.add("big-box-delete")
    tagDiv.classList.add("div-modal-delete")
    tagTitle.classList.add("title-modal-delete")
    tagClose.classList.add("close-modal-delete")
    tagDivText.classList.add("div-text-modal-delete")
    tagTitle2.classList.add("title-delete")
    tagText.classList.add("text-delete")
    tagForm.classList.add("form-buttons-modal-delete")
    tagBtnCancel.classList.add("button-modal-1-delete")
    tagBtnDelete.classList.add("button-modal-2-delete")

    tagTitle.innerText = "Confirmação de exclusão"
    tagClose.innerText = "X"
    tagTitle2.innerText = "Tem certeza que deseja excluir esse post?"
    tagText.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"
    tagBtnCancel.innerText = "Cancelar"
    tagBtnDelete.innerText = "Sim, excluir o post"

    tagBtnCancel.type = "button"
    tagBtnDelete.type = "button"

    tagForm.append(tagBtnCancel, tagBtnDelete)
    tagDivText.append(tagTitle2, tagText)
    tagDiv.append(tagTitle, tagClose)
    tagBigBox.append(tagDiv, tagDivText, tagForm)
    tagSectionModal.append(tagBigBox)
    navModal.append(tagSectionModal)

    const buttonToggleModalDelete = document.querySelector(".btn-delete")

    buttonToggleModalDelete.addEventListener("click", function (event) {

        event.preventDefault()

        document.querySelector(".modal-container-delete").classList.add("show-modal-delete")
    })

    tagClose.addEventListener("click", function (event) {

        event.preventDefault()

        document.querySelector(".modal-container-delete").classList.remove("show-modal-delete")
    })

    tagBtnCancel.addEventListener("click", function (event) {

        event.preventDefault()

        document.querySelector(".modal-container-delete").classList.remove("show-modal-delete")
    })

}