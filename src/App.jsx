import GetPosts from './components/GetPosts'
import PostForm from './components/PostForm'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Axios 练习</h1>
        <p>
          使用免费练习接口 <code>jsonplaceholder.typicode.com</code> 模拟后端。
          真实项目里把 <code>baseURL</code> 改成你自己的后端地址即可。
        </p>
      </header>

      <GetPosts />
      <PostForm />
    </main>
  )
}

export default App
