import axios from "axios";

export const api = axios.create({
    baseURL: "https://fake-api-appgastos.onrender.com",
})