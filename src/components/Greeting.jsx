// 1. 最基础的组件：接收 props，返回 JSX
function Greeting({ name, emoji = '👋' }) {
  return (
    <p className="learn-card">
      {emoji} 你好，<strong>{name}</strong>！
    </p>
  )
}

export default Greeting
