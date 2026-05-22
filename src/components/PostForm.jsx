import { useState } from 'react'
import api from '../api/client'

function PostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')
      setResult(null)

      // POST：把表单内容发给后端
      const { data } = await api.post('/posts', {
        title,
        body,
        userId: 1,
      })

      setResult(data)
      setTitle('')
      setBody('')
    } catch (err) {
      setError(err.message || '提交失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="panel">
      <h2>POST — 提交数据</h2>
      <p>
        <code>api.post('/posts', {'{ title, body }'})</code> 点击提交把内容发给后端。
      </p>

      <form className="post-form" onSubmit={handleSubmit}>
        <label>
          标题
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="写个标题"
            required
          />
        </label>
        <label>
          内容
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="写点内容"
            rows={3}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? '提交中…' : '提交到后端'}
        </button>
      </form>

      {error && <p className="status error">{error}</p>}

      {result && (
        <pre className="result-box">{JSON.stringify(result, null, 2)}</pre>
      )}
    </section>
  )
}

export default PostForm
