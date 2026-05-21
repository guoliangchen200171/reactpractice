import { useState } from 'react'

// 4. 列表渲染：map 把数组变成一组组件
const initialTodos = [
  { id: 1, text: '认识函数组件', done: true },
  { id: 2, text: '学会传 props', done: false },
  { id: 3, text: '练习 useState', done: false },
]

function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  function toggle(id) {
    setTodos((list) =>
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggle(todo.id)}
            />
            <span className={todo.done ? 'done' : ''}>{todo.text}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
