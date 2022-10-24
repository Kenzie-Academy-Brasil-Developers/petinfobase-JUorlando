export function getLocalStorage () {

    const user = JSON.parse(localStorage.getItem("userLogin")) || ""

    return user
}