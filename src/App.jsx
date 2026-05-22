import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="page">
      <h1>首页</h1>
      <button type="button" onClick={() => navigate('/detail')}>
        去详情页
      </button>
    </main>
  )
}

function Detail() {
  const navigate = useNavigate()

  return (
    <main className="page">
      <h1>详情页</h1>
      <button type="button" onClick={() => navigate('/')}>
        返回首页
      </button>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
