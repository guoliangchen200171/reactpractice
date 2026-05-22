import { useState } from 'react'
import api from '../api/client'

function PostForm({ onSuccess }) {
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

      const { data } = await api.post('/posts', { title, body })

      setResult(data)
      setTitle('')
      setBody('')
      onSuccess?.()
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
        <code>await api.post('/posts', {'{ title, body }'})</code>{' '}
        把表单 JSON 发给「后端」，mock 会假装保存并返回结果。
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
          {loading ? '提交中…' : '发送 POST 请求'}
        </button>
      </form>

      {error && <p className="status error">{error}</p>}

      {result && (
        <>
          <p className="status success">mock 后端返回：</p>
          <pre className="result-box">{JSON.stringify(result, null, 2)}</pre>
        </>
      )}
    </section>
  )
}

export default PostForm
