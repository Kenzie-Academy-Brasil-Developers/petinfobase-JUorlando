import { getLocalStorage } from "../scripts/localStorage.js"
import { getUsers } from "./requestPost.js"

const verificyPermission = () => {

    const user = getLocalStorage()

    if(user == ""){

        window.location.replace("../../index.html")
    }
}

verificyPermission()

console.log(await getUsers())