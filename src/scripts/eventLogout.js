export function Logout (){

    const buttonLogout = document.querySelector(".button-logout")
    
    console.log(buttonLogout)
    
    buttonLogout.addEventListener("click", (event) => {
    
        event.preventDefault()
    
        localStorage.removeItem("userLogin")
        localStorage.removeItem("usersData")
        localStorage.removeItem("userDados")
        localStorage.removeItem("posts")


        window.location.assign("../../index.html")
    
    })

}
