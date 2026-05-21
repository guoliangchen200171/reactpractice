import { useState } from 'react'

// 2. 带状态的组件：useState 让界面能响应点击
function Counter({ step = 1 }) {
  const [count, setCount] = useState(0)

  return (
    <div className="learn-card">
      <p>
        当前计数：<strong>{count}</strong>
      </p>
      <div className="learn-actions">
        <button type="button" onClick={() => setCount((c) => c - step)}>
          -{step}
        </button>
        <button type="button" onClick={() => setCount(0)}>
          重置
        </button>
        <button type="button" onClick={() => setCount((c) => c + step)}>
          +{step}
        </button>
      </div>
    </div>
  )
}

export default Counter
