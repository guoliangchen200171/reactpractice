import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function ContactPage() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/', { replace: true })
  }

  return (
    <div className="page">
      <PageHeader
        title="联系我们"
        description="表单提交后使用 navigate('/', { replace: true }) 返回首页且不保留历史记录。"
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          姓名
          <input name="name" type="text" placeholder="请输入姓名" required />
        </label>
        <label>
          邮箱
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          留言
          <textarea name="message" rows={4} placeholder="请描述你的需求" required />
        </label>
        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
            取消
          </button>
          <button type="submit">提交并返回首页</button>
        </div>
      </form>
    </div>
  )
}

export default ContactPage
