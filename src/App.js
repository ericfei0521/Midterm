import React from 'react'

import TodoInput from './component/todoInput'
import TodoList from './component/todoList'

function App() {
  return (
    <div>
      <div>
        <TodoInput />
      </div>
      <TodoList value={current} />
    </div>
  )
}

export default App
