import React from "react"
import TodoItem from "./todoListItem"
import styles from "../Style/list.module.scss"
import {useSelector} from 'react-redux'

function TodoList(props){
  let todos = useSelector(state => { 
    localStorage.setItem("state", JSON.stringify(state))
    return state
  })
  return(
    <div className={styles.List}>
      {todos.filter( todo=>
        props.value === "All" || 
        (props.value === 'Active'? !todo.isComplete : todo.isComplete)
      ).map(todo=>
        <TodoItem
        key = {todo.id}
        todo = {todo}
        />
        )}
    </div>
  )
}

export default TodoList