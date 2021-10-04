
import "isomorphic-fetch"

export async function mocking() {
  try {
    const result = await fetch(
      `https://dog.ceo/api/breeds/image/random`
    );
    const data = await result.json();
    return data.status
  } catch (e) {
    return Promise.reject(e)
  }
}

console.log(mocking())
export default mocking
//Using Axios here
// import axios from "axios";
// export default async function mocking(){
//     const response=await axios.get("https://dog.ceo/api/breeds/image/random")
//       return response.data['status']
      
// }
// mocking()
