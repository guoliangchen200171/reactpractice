import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        {/* Link：像 <a>，但不会刷新整页，只切换路由 */}
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          首页
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          详情页
        </NavLink>
      </nav>

      {/* Routes：根据 URL 显示对应页面组件 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
