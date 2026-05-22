import { useState, useEffect } from 'react'

// useEffect：在渲染之后执行副作用（改标题、请求接口、定时器等）
function UseEffectDemo() {
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = name ? `你好，${name}` : 'React Hooks 练习'
  }, [name]) // 依赖 name：只有 name 变化时才再执行

  return (
    <section className="demo">
      <h2>② useEffect</h2>
      <p>输入名字，观察浏览器标签页标题的变化。</p>
      <input
        type="text"
        placeholder="输入你的名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </section>
  )
}

export default UseEffectDemo
