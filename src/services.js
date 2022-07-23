import axios from "axios";
export const BASE_URL = "https://randomuser.me/api?results=15"

async function getUser() { 
  const response = await axios.get(BASE_URL)
  return response.data.results
}

export default getUser;
