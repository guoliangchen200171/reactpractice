import api from './client'

// 假装数据库里的帖子
let posts = [
  { id: 1, title: '学习 axios GET', body: '用 api.get 拉取列表' },
  { id: 2, title: '学习 axios POST', body: '用 api.post 提交表单' },
  { id: 3, title: '本地模拟后端', body: '不需要真实服务器' },
]

function delay(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** 拦截 axios，在本地返回数据，模拟后端响应 */
export function setupMockApi() {
  api.defaults.adapter = async (config) => {
    const url = config.url || ''
    await delay()

    // GET /posts
    if (config.method === 'get' && url.includes('/posts')) {
      return {
        data: posts,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }
    }

    // POST /posts
    if (config.method === 'post' && url.includes('/posts')) {
      const body =
        typeof config.data === 'string' ? JSON.parse(config.data) : config.data

      const newPost = {
        id: posts.length + 1,
        title: body.title,
        body: body.body,
        createdAt: new Date().toLocaleString(),
      }

      posts = [newPost, ...posts]

      return {
        data: newPost,
        status: 201,
        statusText: 'Created',
        headers: {},
        config,
      }
    }

    const error = new Error(`未配置的 mock 接口: ${config.method} ${url}`)
    error.config = config
    return Promise.reject(error)
  }
}
