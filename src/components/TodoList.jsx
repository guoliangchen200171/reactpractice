import { useState } from 'react'

// 4. 列表渲染：map 把数组变成一组组件
const initialTodos = [
  { id: 1, text: '认识函数组件', done: true },
  { id: 2, text: '学会传 props', done: false },
  { id: 3, text: '练习 useState', done: false },
  { id: 4, text: '练习 react', done: false },
]

function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
//让 React 帮你保存一份叫 todos 的状态数据，初始值是 initialTodos，以后用 setTodos 来修改它。
  function toggle(id) {
    //根据传进来的 id，找到对应的 todo，把它的 done 状态反过来。
    setTodos((list) =>
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )
  }
//如果 item.id 等于传进来的 id
//     就复制这个 item，并把 done 改成相反值
// 否则
//     这个 item 不变
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
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggle(todo.id)}
            />
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
