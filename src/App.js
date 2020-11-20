import React, { useState } from 'react'

import TodoInput from './component/todoInput'
import TodoItem from './component/todoListItem'

function App() {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    setLists([...lists, title])
  }
  const editList = (title, id) => {
    let newTodos = [...lists]
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos[i].name = title
      }
    }
    setLists(newTodos)
  }
  const deleteList = (id) => {
    let arr = [...lists].filter((task) => task.id !== id)
    setLists(arr)
  }
  return (
    <div style={{ display: 'flex' }}>
      {lists.map((list) => (
        <TodoItem title={list.name} id={list.id} editList={editList} deleteList={deleteList} key={list.id} />
      ))}
      <TodoInput addList={addList} title="Addlist" />
    </div>
  )
}

export default App
