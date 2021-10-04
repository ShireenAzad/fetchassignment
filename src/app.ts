import axios from "axios";
export default async function mocking(){
    const response=await axios.get("https://dog.ceo/api/breeds/image/random")
      return response.data['status']
      
}
mocking()
