
import axios from "axios";


export const campingClient = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_ENDPOINT || "/",
    // withCredentials: true
})