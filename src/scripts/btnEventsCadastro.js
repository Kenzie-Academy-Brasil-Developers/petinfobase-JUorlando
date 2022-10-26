export function btnEventCadastro (){


    const btnCadastro = document.querySelector("#btn-cadastrar")
    
    btnCadastro.addEventListener("click", () => {
    
        btnCadastro.innerHTML = ""
    
        const img = document.createElement("img")
        img.src = "../../src/img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"
    
        btnCadastro.appendChild(img)
    
        btnSkinCadastro(btnCadastro)

    })

}

btnEventCadastro()

async function btnSkinCadastro (button){

    const users = await fetch("http://localhost:3333/", {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        button.innerHTML = ""
        button.innerText = "Cadastrar"
        
    })
 
    return users
 }