import { renderPosts } from "./renderPost.js"
import { updatePost } from "./requestEditDelete.js"
// import { deletePost } from "./requestEditDelete.js"


const editPost = ({title, content, id}) => {
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML =`
        <section id="modal-container" class="modal-container show-modal">
        <div class="big-box">
        <div class="div-modal">
        <h2 class="title-modal">Edição</h2>
        <button id="close-modal" class="close-modal" type="button">X</button>
        </div>
        <form class="form-modal-inputs">
        <label class="label-title">Titulo do post</label>
        <input class="title" placeholder="Digite seu titulo aqui..."  value="${title}" type="text" name="title">
        <label class="content-label">Conteúdo do post</label>
        <input class="content" placeholder="Desenvolva aqui o conteúdo do seu post..." value="${content}" type="text" name="content">
        <button id="btn-cancel" class="button-modal-1" type="button">Cancelar</button>
        <button id="btn-editar" type="submit">Salvar alterações</button>
        </form>
        </div>
        </section>
    `

    // const btnEdit = document.querySelector("#btn-editar")

    // btnEdit.addEventListener("click", function () {

    //     document.querySelector("#modal-container").classList.remove("show-modal")
    // })

    // const btnClose = document.querySelector("#close-modal")
    // console.log(btnClose)
    // btnClose.addEventListener("click", function () {

    //     document.querySelector("#modal-container").remove()
    // })

    // const btnCancel = document.querySelector("#btn-cancel")

    // btnCancel.addEventListener("click", function () {

    //     document.querySelector("#modal-container").classList.remove("show-modal")
    // })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputs = [...event.target]

        const post = {}

        inputs.forEach(({name, value}) => {
          
            if(name){
                post[name] = value 
            }
        })

        await updatePost(post, id)
        await renderPosts()
    })

    return formulario
}



// const deletePost = (id) => {
//     const deleteForm = deletePostForm(id)
//     openModal(deleteForm)
//   }

// const deletePostForm = (id) => {
//     const formulario = document.createElement("form")
//     formulario.classList.add("formbase")

//     formulario.insertAdjacentHTML("beforeend", `
//     <section class="modal-container-delete">
//     <div class="big-box-delete">
//     <div class="div-modal-delete">
//     <h2 class="title-modal-delete">Confirmação de exclusão</h2>
//     <button class="close-modal-delete">X</button>
//     </div>
//     <div class="div-text-modal-delete">
//     <h3 class="title-delete">Tem certeza que deseja excluir esse post?</h3>
//     <p class="text-delete">Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
//     </div>
//     <form class="form-buttons-modal-delete">
//     <button class="button-modal-1-delete" type="button">Cancelar</button>
//     <button class="button-modal-2-delete" type="button">Sim, excluir o post</button>
//     </form>
//     </div>
//     </section>
//     `)

//     formulario.addEventListener("submit", async (event) => {
//         event.preventDefault()

//         await deletePost(id)
//         await renderPosts()

//     })

//     return formulario
// }



export { editPost }