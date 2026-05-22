import axios from 'axios'

// 创建 axios 实例，后面请求都通过它发
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
