import { useEffect, useState } from 'react'
import api from '../api/client'

function GetPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError('')
        // GET：从后端（这里是练习接口）拉数据
        const { data } = await api.get('/posts', {
          params: { _limit: 5 },
        })
        setPosts(data)
      } catch (err) {
        setError(err.message || '请求失败')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="panel">
      <h2>GET — 获取数据</h2>
      <p>
        <code>api.get('/posts')</code> 页面加载时向后端要列表。
      </p>

      {loading && <p className="status">加载中…</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <span>#{post.id}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default GetPosts
