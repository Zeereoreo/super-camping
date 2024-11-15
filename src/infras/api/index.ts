import axios from "axios";
const SECRET_KEY = process.env.SECRET_KEY || "%2BPnRJoZ%2FqDJge4VIR%2BdEaIx4vj5SOgOZng%2BbDyn0vYDd8g3bOsFGrGQF%2BdMB%2FI2rT1JKOHVx1LnoEJdg81ELDA%3D%3D";
const PUBLIC_END_POINT = "http://apis.data.go.kr/B551011/GoCamping";

export const campingClient = axios.create({
    baseURL : PUBLIC_END_POINT || "/",
    withCredentials: true
})