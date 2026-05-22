import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const team = [
  { name: '张明', role: '前端负责人', focus: 'React / 工程化' },
  { name: '李悦', role: 'UI 设计', focus: '设计系统 / 交互' },
  { name: '王浩', role: '全栈开发', focus: 'Node / API 设计' },
]

function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <PageHeader
        title="关于我们"
        description="静态信息页示例，适合练习无参数的常规路由。"
      />

      <section className="content-block">
        <h2>团队介绍</h2>
        <p>
          本项目用于练习 React Router：布局嵌套、导航高亮、动态参数与 404 兜底页面。
        </p>
      </section>

      <ul className="team-list">
        {team.map((member) => (
          <li key={member.name} className="team-card">
            <strong>{member.name}</strong>
            <span>{member.role}</span>
            <p>{member.focus}</p>
          </li>
        ))}
      </ul>

      <div className="page-footer-actions">
        <button type="button" onClick={() => navigate('/contact')}>
          与我们取得联系
        </button>
      </div>
    </div>
  )
}

export default AboutPage
