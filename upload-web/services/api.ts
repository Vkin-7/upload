import axios from 'axios'

const baseURL = process.env.BACKEND_VAR ? process.env.BACKEND_VAR : 'http://localhost:3333'

const api = axios.create({
    baseURL
})

export default api