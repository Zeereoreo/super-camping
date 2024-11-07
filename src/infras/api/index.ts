import axios from "axios";

export const campingClient = axios.create({
    baseURL : process.env.PUBLIC_END_POINT || "/",
    withCredentials: true
})