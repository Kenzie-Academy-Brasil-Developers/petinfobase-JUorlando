import { getLocalStorage } from "./localStorage.js"
import { renderHeader } from "./renderPost.js"

const baseUrl = "http://localhost:3333/"

async function getUsers (){

    const localStorage = getLocalStorage()

    try{

        const request = await fetch(baseUrl + "users/" + "profile", {

        method: "GET",
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }

        })
        

        const response = await request.json()
    
        return response
    } 
    
    catch (err){

        console.log(err)
    }
    
}

async function getPosts (){

    const localStorage = getLocalStorage()

    try{

        const request = await fetch(baseUrl + "posts", {

        method: "GET",
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }

        })
        

        const response = await request.json()
    
        return response
    } 
    
    catch (err){

        console.log(err)
    }
    
}

export {
    getUsers,
    getPosts
}