import { useState } from 'react'

// useState：在组件里保存会变化的数据，更新后界面自动刷新
function UseStateDemo() {
  const [count, setCount] = useState(0)

  return (
    <section className="demo">
      <h2>① useState</h2>
      <p>当前计数：<strong>{count}</strong></p>
      <button type="button" onClick={() => setCount(count + 1)}>
        点我 +1
      </button>
    </section>
  )
}

export default UseStateDemo
