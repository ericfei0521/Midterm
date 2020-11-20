import React, { useState } from 'react'

function TodoInput({addList}) {
  let [name, setName] = useState()
  return(
  <div>
   <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
   <button
   onClick ={()=>{
     addList(name)
     setName("")
   }}
   >
     Submit
   </button>
  </div>
  )

}

export default TodoInput
