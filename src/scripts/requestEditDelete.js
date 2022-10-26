import { getLocalStorage } from "./localStorage.js";
import { renderPosts } from "./renderPost.js";

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
  
      if(request.ok == true){

        const response = await request.json()

        await renderPosts()


        return response;
    } 
  
    } catch (err) {
      console.log(err);
    }
  }
  
//   export async function deletePost(idPost) {
//     const localStorage = getLocalStorage();
  
//     try {
//       const request = await fetch(baseUrl + "posts/" + idPost, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.token}`,
//         }
//       });
  
//       const response = await request.json();
  
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   }