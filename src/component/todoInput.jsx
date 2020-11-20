import React, { useState } from 'react'
import styles from '../Style/input.module.scss'
import { useDispatch } from 'react-redux'
import { addTodo } from '../action/action'
import { nanoid } from 'nanoid'

function TodoInput() {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div className={styles.form}>
      <h1>Todo list</h1>
      <div className={styles.inputarea}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: nanoid(),
                name: name,
              })
            )
            setName('')
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default TodoInput
