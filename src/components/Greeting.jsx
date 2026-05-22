// 1. 最基础的组件：接收 props，返回 JSX
function Greeting({ name, emoji = '👋' }) {
  return (
    <p className="learn-card">
      {emoji} 你好，<strong>{name}</strong>！
      哈哈哈<strong>最近怎么样</strong>！
    </p>
  )
}

export default Greeting
