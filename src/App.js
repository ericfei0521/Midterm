import React, { useState } from 'react'

import TodoInput from './component/todoInput'
import TodoItem from './component/todoListItem'

import './style/all.css'

function App() {
  let [lists, setLists] = useState([])
  const addList = (title) => {
    if (title.name) {
      setLists([...lists, title])
    }
  }
  const editList = (title, id) => {
    let newTodos = [...lists]
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos[i].name = title
      }
    }
    if (title) {
      setLists(newTodos)
    }
  }
  const deleteList = (id) => {
    let arr = [...lists].filter((task) => task.id !== id)
    setLists(arr)
  }
  return (
    <div className="all">
      <div className="inputarea">
        <TodoInput addList={addList} title="Addlist" />
      </div>
      <div className="listplace">
        {lists.map((list) => (
          <TodoItem title={list.name} id={list.id} editList={editList} deleteList={deleteList} key={list.id} />
        ))}
      </div>
    </div>
  )
}

export default App
