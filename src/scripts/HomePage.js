import { getLocalStorage } from "../scripts/localStorage.js"
import { getUsers, getPosts } from "./requestPost.js"
import { renderHeader, renderPosts, renderButtons } from "./renderPost.js"
import { criandoModalPost } from "./modal.js"
import { eventCreatPost } from "./requisitionModal.js"
import { btnEventModal } from "./btnEventModal.js"
import { Logout } from "./eventLogout.js"

const save = localStorage.setItem("usersData", JSON.stringify(await getUsers()))

const posts = localStorage.setItem("posts", JSON.stringify( await getPosts()))

const verificyPermission = () => {

    const user = getLocalStorage()

    if(user == ""){

        window.location.replace("../../index.html")
    }
}

verificyPermission()

renderHeader(JSON.parse(localStorage.getItem("usersData", save)))

renderPosts(JSON.parse(localStorage.getItem("posts", posts)))

renderButtons(JSON.parse(localStorage.getItem("usersData", save)), JSON.parse(localStorage.getItem("posts", posts)))

criandoModalPost()

eventCreatPost()

btnEventModal()

Logout()