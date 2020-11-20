import React, { useState } from 'react'

import TodoInput from './component/todoInput'
import TodoItem from './component/todoListItem'

function App() {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    setLists([...lists, title])
  }
  return (
    <div style={{ display: 'flex' }}>
      {lists.map((list) => (
        <TodoItem title={list} />
      ))}
      <TodoInput addList={addList} />
    </div>
  )
}

export default App
