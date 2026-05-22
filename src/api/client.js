import axios from 'axios'

// axios 实例：写法与连真实后端时一样
// 当前由 setupMock.js 拦截请求，在本地返回假数据，不需要联网
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
