import { useNavigate } from 'react-router-dom'

function DetailPage() {
  const navigate = useNavigate()

  return (
    <main className="learn-page">
      <header className="learn-header">
        <h1>详情页</h1>
        <p>你已经从首页跳转过来了。当前路径是 <code>/detail</code></p>
      </header>

      <section className="learn-section route-demo">
        <h2>这是第二个页面</h2>
        <p className="hint">
          文件：<code>src/pages/DetailPage.jsx</code>
        </p>
        <p>单页应用（SPA）不会整页刷新，只是 React 换了要显示的组件。</p>

        <div className="learn-actions">
          <button type="button" onClick={() => navigate('/')}>
            ← 返回首页
          </button>
          <button type="button" onClick={() => navigate(-1)}>
            浏览器式返回
          </button>
        </div>
      </section>
    </main>
  )
}

export default DetailPage
