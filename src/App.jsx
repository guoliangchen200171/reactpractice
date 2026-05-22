import { useState } from 'react'
import GetPosts from './components/GetPosts'
import PostForm from './components/PostForm'
import './App.css'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <main className="app">
      <header className="app-header">
        <h1>Axios 练习</h1>
        <p>
          不连真实后端。请求写法与正式项目相同，数据由{' '}
          <code>src/api/setupMock.js</code> 在本地假装返回。
        </p>
      </header>

      <GetPosts key={refreshKey} />
      <PostForm onSuccess={() => setRefreshKey((k) => k + 1)} />
    </main>
  )
}

export default App
