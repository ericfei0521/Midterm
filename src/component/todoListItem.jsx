import React, { useState } from 'react'
import TodoInput from './todoInput'
import ListCard from './listCard'
import '../style/list.css'
const TodoItem = ({ title }) => {
    let [lists, setLists] = useState([])
    const addList = (title) => {
      setLists([...lists, title])
    }
    return (
      <div className="list">
          <h1>{title}</h1>
          {lists.map((list) => (
        <ListCard title={list} />
      ))}
      <TodoInput addList={addList} />
          </div>
         );
  };
export default TodoItem