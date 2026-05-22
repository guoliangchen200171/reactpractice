import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="page page--center">
      <PageHeader
        title="404"
        description={'访问的路径不存在。路由表最后的 path="*" 会匹配所有未定义页面。'}
      />
      <div className="empty-state">
        <button type="button" onClick={() => navigate('/')}>
          回到首页
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
