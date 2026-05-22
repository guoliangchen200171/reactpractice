// 3. 用 props 传递对象：父组件传数据，子组件只负责展示
function UserCard({ user }) {
  const { name, role, avatar } = user

  return (
    <article className="user-card">
      <span className="user-avatar" aria-hidden="true">
        {avatar}
          <p>测试一下</p>
          {avatar}
      </span>
        <div>
            <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </article>
  )
}

export default UserCard
