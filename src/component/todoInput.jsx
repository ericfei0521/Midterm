import React, { useState } from 'react'

function TodoInput({addList}) {
  let [name, setName] = useState()
  let [show,setShow]=useState(false)
  return(
  <div>
    {show? (
    <div>
   <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
   <button onClick ={()=>{ addList(name) ;setName("");setShow(false)}}>Submit</button>
   <button onClick={()=> setShow(false)}>X</button>
   </div>
    ):(
     <button onClick={()=> setShow(true)}>Addlist</button>
    )}
  </div>
  )

}

export default TodoInput
