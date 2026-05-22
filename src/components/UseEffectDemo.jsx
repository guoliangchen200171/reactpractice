import { useState, useEffect } from 'react'

// useEffect：在渲染之后执行副作用（改标题、请求接口、定时器等）
function UseEffectDemo() {
  const [name, setName] = useState('')
  // 页面上显示 effect 的结果，避免只改标签页标题看不出来
  const [titleFromEffect, setTitleFromEffect] = useState('')

  useEffect(() => {
    const nextTitle = name ? `你好，${name}` : 'React Hooks 练习'
    document.title = nextTitle
    setTitleFromEffect(nextTitle)
  }, [name])

  return (
    <section className="demo">
      <h2>② useEffect</h2>
      <p>输入名字后，下面会显示 useEffect 执行后的标题（同时会改浏览器标签页）。</p>
      <input
        type="text"
        placeholder="输入你的名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="effect-result">
        useEffect 设置的标题：
        <strong>{titleFromEffect || '（等待首次执行…）'}</strong>
      </p>
    </section>
  )
}

export default UseEffectDemo
