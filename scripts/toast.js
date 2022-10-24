export function toast (title, message) {

    const body = document.querySelector(".container")

    const container = document.createElement("div")
    container.classList.add("toast-conatiner")

    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${title}`

    if(title == "Sucesso!"){
        container.classList.add("sucesstoast")
        icon.src = "../../img/sucess.png"
    } 

    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerText = message

    textContainer.append(h3, span)

    container.append(icon, textContainer)

    body.appendChild(container)

}

export function toastCadastro (title, message) {

    const body = document.querySelector(".container")

    const container = document.createElement("div")
    container.classList.add("toast-conatiner")

    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${title}`

    if(title == "Sua conta foi criada com sucesso!"){
        container.classList.add("sucesstoast")
        icon.src = "../../img/sucess.png"
    } 

    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerHTML = `${message} <a hreaf="http://127.0.0.1:5500/index.html?">Acessar pagina de login</a>`

    textContainer.append(h3, span)

    container.append(icon, textContainer)

    body.appendChild(container)

}
