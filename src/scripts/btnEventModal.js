
export async function btnEventModal (){


    const btnModal = document.querySelector(".button-modal-2")
    
    btnModal.addEventListener("click", () => {
    
        btnModal.innerHTML = ""
    
        const img = document.createElement("img")
        img.src = "../../src/img/spinner.png"
        img.alt = "spinner"
        img.classList = "loading"
    
        btnModal.appendChild(img)

    })

}