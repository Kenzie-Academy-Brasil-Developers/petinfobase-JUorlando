import { renderPosts } from "./renderPost.js"
import { updatePost, deletePost, acessPost } from "./requestEditDelete.js"


const editPost = ({ title, content, id }) => {
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <section id="modal-container" class="modal-container show-modal">
        <div class="big-box">
        <div class="div-modal">
        <h2 class="title-modal">Edição</h2>
        <button id="close-modal" class="close-modal" type="button">X</button>
        </div>
        <div class="form-modal-inputs">
        <label class="label-title">Titulo do post</label>
        <input class="title" placeholder="Digite seu titulo aqui..."  value="${title}" name="title">
        <label class="content-label">Conteúdo do post</label>
        <input class="content" placeholder="Desenvolva aqui o conteúdo do seu post..." value="${content}" name="content">
        <button id="btn-cancel" class="button-modal-1" type="button">Cancelar</button>
        <button id="btn-editar" class="button-modal-2" type="submit">Salvar alterações</button>
        </div>
        </div>
        </section>
    `

    const btnEdit = formulario.querySelector("#btn-editar")

    btnEdit.addEventListener("click", () => {

        btnEdit.innerHTML = ""

        const img = document.createElement("img")
        img.src = "../../src/img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"

        btnEdit.appendChild(img)

        setTimeout(() => {

            window.location.assign("../../pages/posts/posts.html")

        }, 2000)

    })


    const btnClose = formulario.querySelector("#close-modal")

    btnClose.addEventListener("click", function () {


        formulario.remove()
    })

    const btnCancel = formulario.querySelector("#btn-cancel")

    btnCancel.addEventListener("click", function () {


        formulario.remove()
    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputs = [...event.target]

        const post = {}

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await updatePost(post, id)
        await renderPosts()
    })

    return formulario
}


const deletePostForm = (id) => {

    console.log(id)
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.insertAdjacentHTML("beforeend", `
    <section class="modal-container-delete show-modal">
    <div class="big-box-delete">
    <div class="div-modal-delete">
    <h2 class="title-modal-delete">Confirmação de exclusão</h2>
    <button class="close-modal-delete">X</button>
    </div>
    <div class="div-text-modal-delete">
    <h3 class="title-delete">Tem certeza que deseja excluir esse post?</h3>
    <p class="text-delete">Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
    </div>
    <div class="form-buttons-modal-delete">
    <button class="button-modal-1-delete" type="submit">Cancelar</button>
    <button id="btn-excluir" class="button-modal-2-delete" type="submit">Sim, excluir o post</button>
    </div>
    </div>
    </section>
    `)

    const btnDelete = formulario.querySelector("#btn-excluir")

    btnDelete.addEventListener("click", () => {

        btnDelete.innerHTML = ""

        deletePost(id)

        const img = document.createElement("img")
        img.src = "../../src/img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"

        btnDelete.appendChild(img)

        setTimeout(() => {

            window.location.assign("../../pages/posts/posts.html")

        }, 2000)

    })


    const btnCloseDelete = formulario.querySelector(".close-modal-delete")

    btnCloseDelete.addEventListener("click", function () {

        formulario.remove()

    })

    const btnCancelDelete = formulario.querySelector(".button-modal-1-delete")

    btnCancelDelete.addEventListener("click", function () {

        formulario.remove()

    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        await deletePost(id)
        await renderPosts()

    })

    return formulario
}

const acessPostForm = ({ user, createdAt, title, content, id }) => {
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <section id="modal-container" class="modal-container show-modal">
        <div class="big-box-acess">
        <div class="div-modal-acess">
        <img class="img-acess" src="${user.avatar}">
        <h2 class="title-modal-acess">${user.username}</h2>
        <p class="data-acess">${createdAt}</p>
        <button id="close-acess" class="close-modal" type="button">X</button>
        </div>
        <div class="form-modal-inputs-acess">
        <h2 id="h2-acess">${title}</h2>
        <p id="p-acess">${content}</p>
        </div>
        </section>
    `

    const btnClose = formulario.querySelector("#close-acess")

    btnClose.addEventListener("click", function () {


        formulario.remove()
    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputs = [...event.target]

        const post = {}

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await acessPost(post, id)
        await renderPosts()
    })

    return formulario
}

export { editPost, deletePostForm, acessPostForm }