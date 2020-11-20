import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import '../style/input.css'
function TodoInput({ addList, title }) {
  let [name, setName] = useState()
  let [show, setShow] = useState(false)
  return (
    <div>
      {show ? (
        <div className="input">
          <div className="submit">
          <input  type="text" onChange={(e) => setName(e.target.value)} value={name} />
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
          <button className=" danger" onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="input">
          <button  onClick={() => setShow(true)}>
            {title}
          </button>
        </div>
      )}
    </div>
  )
}

export default TodoInput
