import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页', end: true },
  { to: '/products', label: '产品中心' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系我们' },
]

function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="sidebar__logo">RP</span>
          <div>
            <strong>React Practice</strong>
            <span>路由练习项目</span>
          </div>
        </div>

        <nav className="sidebar__nav">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `sidebar__link${isActive ? ' is-active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <p className="sidebar__hint">
          使用 <code>NavLink</code> 高亮当前页，子页面通过 <code>&lt;Outlet /&gt;</code> 渲染。
        </p>
      </aside>

      <div className="main-area">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
