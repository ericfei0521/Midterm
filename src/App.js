import React, { useState } from 'react'

import TodoInput from './component/todoInput'
import TodoItem from './component/todoListItem'

function App() {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    setLists([...lists, title])
  }
  return (
    <div>
      <TodoInput addList={addList} />
      {lists.map((list) => (
        <TodoItem title={list} />
      ))}
    </div>
  )
}

export default App
