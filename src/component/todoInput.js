import React, { useState } from 'react'
import { nanoid } from 'nanoid'
function TodoInput({ addList, title }) {
  let [name, setName] = useState()
  let [show, setShow] = useState(false)
  return (
    <div>
      {show ? (
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          <button
            onClick={() => {
              addList({
                id: nanoid(),
                name: name,
              })
              setName('')
              setShow(false)
            }}
          >
            Submit
          </button>
          <button onClick={() => setShow(false)}>X</button>
        </div>
      ) : (
        <button onClick={() => setShow(true)}>{title}</button>
      )}
    </div>
  )
}

export default TodoInput
