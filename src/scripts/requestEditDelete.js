import { getLocalStorage } from "./localStorage.js";
import { renderPosts } from "./renderPost.js";
import { toastModalEdit, toastModalDelete } from "./toastEditDelete.js";

const baseUrl = "http://localhost:3333/"

export async function updatePost(body, idPost) {

  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseUrl + "posts/" + idPost, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    });

    if (request.ok == true) {

      toastModalEdit("Sucesso!", "Post editado com sucesso!")

      await renderPosts()

      setTimeout(() => {

        window.location.assign("../../pages/posts/posts.html")

      }, 500)

      return response
    }

  } catch (err) {
    console.log(err);
  }
}

export async function deletePost(idPost) {
  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseUrl + "posts/" + idPost, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      }
    });

    if (request.ok == true) {

      toastModalDelete("Sucesso!", "Post excluído com sucesso!")

      await renderPosts()

      setTimeout(() => {

        window.location.assign("../../pages/posts/posts.html")

      }, 500)

      return response
    }

  } catch (err) {
    console.log(err);
  }
}

export async function acessPost(body, idPost) {

  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseUrl + "posts/" + idPost, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    });

  } catch (err) {
    console.log(err);
  }
}