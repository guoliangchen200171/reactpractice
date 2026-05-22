import { useNavigate } from 'react-router-dom'
import Greeting from '../components/Greeting'
import Counter from '../components/Counter'
import UserCard from '../components/UserCard'
import TodoList from '../components/TodoList'

const users = [
  { name: '小明', role: '前端初学者', avatar: '🧑‍💻' },
  { name: '小红', role: 'React 爱好者', avatar: '🎨' },
  { name: '111', role: 'Re213213', avatar: 'dafadf' },
]

function HomePage() {
  // useNavigate：在事件里（比如点击按钮）编程式跳转
  const navigate = useNavigate()

  return (
    <main className="learn-page">
      <header className="learn-header">
        <h1>React 组件练习</h1>
        <p>下面每个区块对应一种常见写法，可以打开对应文件对照学习。</p>
      </header>

      <section className="learn-section route-demo">
        <h2>⑤ 页面跳转</h2>
        <p className="hint">
          点击按钮用 <code>useNavigate()</code> 跳到详情页（见{' '}
          <code>src/pages/HomePage.jsx</code>）
        </p>
        <button type="button" onClick={() => navigate('/detail')}>
          去详情页 →
        </button>
      </section>

      <section className="learn-section">
        <h2>① Greeting — props</h2>
        <p className="hint">文件：<code>src/components/Greeting.jsx</code></p>
        <Greeting name="学习者" />
        <Greeting name="React" emoji="jidoajfioa" />
      </section>

      <section className="learn-section">
        <h2>② Counter — useState</h2>
        <p className="hint">文件：<code>src/components/Counter.jsx</code></p>
        <Counter />
        <Counter step={5} />
      </section>

      <section className="learn-section">
        <h2>③ UserCard — 传对象</h2>
        <p className="hint">文件：<code>src/components/UserCard.jsx</code></p>
        <div className="user-grid">
          {users.map((user) => (
            <UserCard key={user.name} user={user} />
          ))}
        </div>
      </section>

      <section className="learn-section">
        <h2>④ TodoList — 列表 + 状态</h2>
        <p className="hint">文件：<code>src/components/TodoList.jsx</code></p>
        <TodoList />
      </section>
    </main>
  )
}

export default HomePage
