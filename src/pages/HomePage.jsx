import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const shortcuts = [
  {
    title: '浏览产品',
    desc: '列表页 + 动态详情路由 /products/:id',
    path: '/products',
    cta: '进入产品中心',
  },
  {
    title: '了解团队',
    desc: '静态内容页，练习基础路由跳转',
    path: '/about',
    cta: '关于我们',
  },
  {
    title: '提交咨询',
    desc: '表单页示例，可从按钮编程式导航',
    path: '/contact',
    cta: '联系我们',
  },
]

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <PageHeader
        title="工作台"
        description="多页面单页应用示例。左侧导航切换路由，右侧区域由 React Router 渲染对应页面组件。"
      />

      <section className="card-grid">
        {shortcuts.map((item) => (
          <article key={item.path} className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button type="button" onClick={() => navigate(item.path)}>
              {item.cta}
            </button>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
