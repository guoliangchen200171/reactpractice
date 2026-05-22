import { useEffect, useState } from 'react'
import api from '../api/client'

function GetPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function fetchPosts() {
    try {
      setLoading(true)
      setError('')
      const { data } = await api.get('/posts')
      setPosts(data)
    } catch (err) {
      setError(err.message || '请求失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className="panel">
      <h2>GET — 获取数据</h2>
      <p>
        <code>await api.get('/posts')</code> 像请求后端一样写，实际由本地 mock 返回列表。
      </p>

      {loading && <p className="status">请求中…（模拟约 0.6 秒延迟）</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id}>
                <div>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </div>
                <span>#{post.id}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="btn-ghost" onClick={fetchPosts}>
            重新请求
          </button>
        </>
      )}
    </section>
  )
}

export default GetPosts
