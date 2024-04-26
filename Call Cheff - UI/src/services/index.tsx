import axios from "axios";

const axiosConfig = { headers: { "content-type": "application/json" } };

const api = axios.create({
  baseURL:"http://localhost:8080"
})

export {api , axiosConfig}