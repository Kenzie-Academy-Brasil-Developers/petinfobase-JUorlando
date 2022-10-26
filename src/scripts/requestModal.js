const baseUrl = "http://localhost:3333/"

async function createPost(body){

    try{
        const request = await fetch(baseUrl + "posts/" + "create", {
            method: "POST",
            headers:{

                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if(request.ok == true){

            const response = await request.json()
    
            toast("Sucesso!", "Post criado com sucesso!")

            btnEventAcess()

            localStorage.setItem("userLogin", JSON.stringify(response))

            setTimeout(() => {
    
                document.querySelector(".modal-container").classList.remove("show-modal")
            }, 4000)

        } 

    } catch (err) {
        console.log(err)
    }
}

export {
    createPost
}
