import { useState, useEffect } from 'react'

function UseEffectDemo() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('请在下面输入名字')

  // name 变化后，React 会执行这个函数
  useEffect(() => {
    if (name) {
      setMessage(`你好，${name}！`)
    } else {
      setMessage('请在下面输入名字')
    }
  }, [name]) // 只关心 name，name 不变就不重复执行

  return (
    <section className="demo">
      <h2>② useEffect</h2>
      <p>
        输入框改的是 <code>name</code>，下面这行字由 <code>useEffect</code>{' '}
        根据 name 自动更新。
      </p>

      <p className="effect-result">
        <strong>{message}</strong>
      </p>

      <input
        type="text"
        placeholder="输入名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </section>
  )
}

export default UseEffectDemo
